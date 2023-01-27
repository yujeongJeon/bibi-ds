import updateFigmaFiles from './src/apis/updateFile'
import { COLOR_NODE_ID, TYPO_NODE_ID } from './src/configs/figma'
import { IFrame, ICommon, IText } from './src/types/figma'
import { camelToSnakeCase, toSnakeCaseBySeperator } from './src/utils'
import { rgbaToHex } from './src/utils/color'
import { IColorSetFrame, TColorFigmaDocument, TColorReturnType } from './src/types/color'
import { TTypoFigmaDocument, TTypoFrame, TUsageFrame } from './src/types/typo'
import { createSettledResponse } from './src/utils/promise'

function isFrameInObject<T extends IFrame>(children: ICommon): children is T {
    return children.type === 'FRAME'
}

async function setColor() {
    await updateFigmaFiles({
        nodeId: COLOR_NODE_ID,
        fileName: 'color',
        transform: function transform<T extends TColorFigmaDocument, R extends TColorReturnType>(data: string): R {
            const figmaContent: T = JSON.parse(data)
            const document = figmaContent.nodes[COLOR_NODE_ID].document

            const colorSet: TColorReturnType = document.children
                .filter<IColorSetFrame>(isFrameInObject) // 1-depth : Sub, Grayscale, ...
                .map(({ name, children }) => ({
                    name,
                    children: children.filter(isFrameInObject), // 2-depth : [Gray_10, Gray_9, ...]
                }))
                .reduce(
                    (root, { name: rootName, children }) => ({
                        ...root,
                        [rootName.toUpperCase()]: children // {GRAYSCALE: {GRAY_10: '#121d2e', ...}, ...}
                            .map(({ name, children }) => ({
                                name: camelToSnakeCase(name, {
                                    exclude: rootName,
                                }).toUpperCase(),
                                colors: children.filter((child) => child.type === 'VECTOR')[0].fills[0].color, // VECTOR 객체의 fills 속성을 추출
                            }))
                            .reduce(
                                (colorSet, { name, colors }) => ({
                                    ...colorSet,
                                    [name]: rgbaToHex(colors), // rgba -> hex로 변환
                                }),
                                {},
                            ),
                    }),
                    {} as TColorReturnType,
                )

            const content = JSON.parse(JSON.stringify(colorSet))
            return content
        },
    })
}

async function setTypo() {
    await updateFigmaFiles({
        nodeId: TYPO_NODE_ID,
        fileName: 'typo',
        transform<T extends TTypoFigmaDocument>(data: string) {
            const figmaContent: T = JSON.parse(data)
            const document = figmaContent.nodes[TYPO_NODE_ID].document
            const usage = document.children.filter<TUsageFrame>(isFrameInObject)[0].children

            return usage.filter<TTypoFrame>(isFrameInObject).reduce(
                (obj, { name, children }) => ({
                    ...obj,
                    [toSnakeCaseBySeperator(name)]: children.filter<IText>(
                        (child): child is IText => child.type === 'TEXT',
                    )[0].style,
                }),
                {},
            )
        },
    })
}

type TSetResponse = {
    key: string
    status: 'OK' | 'ERROR'
}

async function main() {
    const results = createSettledResponse<TSetResponse, 'color' | 'typo'>(
        await Promise.allSettled([
            setColor()
                .then((): TSetResponse => ({ status: 'OK', key: 'color' } as TSetResponse))
                .catch((): TSetResponse => ({ status: 'ERROR', key: 'color' } as TSetResponse)),
            setTypo()
                .then(() => ({ status: 'OK', key: 'typo' } as TSetResponse))
                .catch(() => ({ status: 'ERROR', key: 'typo' } as TSetResponse)),
        ]),
    )

    Object.entries(results).forEach(([key, status]) =>
        console.log(`${key}.json 업데이트에 ${status === 'OK' ? '성공' : '실패'}했습니다.`),
    )
}

main()
