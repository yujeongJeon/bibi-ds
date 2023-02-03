/* eslint-disable import/no-unresolved */
import path from 'path'
import getFileNode from './src/apis/getFileNode'
import transformSvgToReactNode from './src/apis/transformSvgToReactNode'
import updateJson from './src/apis/updateJson'
import { COLOR_NODE_ID, ICON_NODE_ID, TYPO_NODE_ID } from './src/configs/figma'
import { TColorSetFrame, TColorReturnType, TColorDocumentFrame } from './src/types/color'
import { IComponent, IText } from './src/types/figma'
import { TIconDocumentFrame, TSizeGroup, TSizeReturnType } from './src/types/icon'
import { TTypoDocumentFrame, TTypoFrame, TUsageFrame } from './src/types/typo'
import { camelToSnakeCase, toSnakeCaseBySeperator } from './src/utils'
import { rgbaToHex } from './src/utils/color'
import { isComponent, isFrame, isGroup } from './src/utils/figma'
import { createSettledResponse } from './src/utils/promise'

async function setColor() {
    await updateJson({
        nodeId: COLOR_NODE_ID,
        fileName: 'color',
        transform: function transform(document: TColorDocumentFrame): TColorReturnType {
            const colorSet: TColorReturnType = document.children
                .filter<TColorSetFrame>(isFrame) // 1-depth : Sub, Grayscale, ...
                .map(({ name, children }) => ({
                    name,
                    children: children.filter(isFrame), // 2-depth : [Gray_10, Gray_9, ...]
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

            const content: TColorReturnType = JSON.parse(JSON.stringify(colorSet))
            return content
        },
    })
}

async function setTypo() {
    await updateJson({
        nodeId: TYPO_NODE_ID,
        fileName: 'typo',
        transform(document: TTypoDocumentFrame) {
            const usage = document.children.filter<TUsageFrame>(isFrame)[0].children

            return usage.filter<TTypoFrame>(isFrame).reduce(
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

async function setIcon() {
    // get size
    await updateJson({
        nodeId: ICON_NODE_ID,
        fileName: 'size',
        transform(document: TIconDocumentFrame): TSizeReturnType {
            const size = document.children.filter<TSizeGroup>(
                (child): child is TSizeGroup => isGroup<TSizeGroup>(child) || child.name === 'Size',
            )[0]

            const sizeSet = size.children
                .filter(isGroup)
                .map(({ name, children }) => ({
                    name,
                    children: children.filter(isComponent)[0],
                }))
                .filter(({ children }) => !!children)
                .reduce((result, { name, children }) => {
                    const { width, height } = children.absoluteBoundingBox
                    return {
                        ...result,
                        [name.toUpperCase()]: {
                            width,
                            height,
                        },
                    }
                }, {} as TSizeReturnType)

            const content: TSizeReturnType = JSON.parse(JSON.stringify(sizeSet))
            return content
        },
    })

    const ICON_PATH = path.resolve(__dirname, './src/Foundation/icon/')

    // get icon
    await getFileNode({
        nodeId: ICON_NODE_ID,
        async transform(document: TIconDocumentFrame) {
            const components = document.children.filter<IComponent>((child): child is IComponent =>
                isComponent<IComponent>(child),
            )

            const ids = Object.fromEntries(components.map(({ id, name }) => [id, name]))
            await transformSvgToReactNode(ids, { path: ICON_PATH })
        },
    })
}

type TSetResponse = {
    key: string
    status: 'OK' | 'ERROR'
}

async function main() {
    const results = createSettledResponse<TSetResponse, 'color' | 'typo' | 'icon'>(
        await Promise.allSettled([
            setColor()
                .then((): TSetResponse => ({ status: 'OK', key: 'color' } as TSetResponse))
                .catch((): TSetResponse => ({ status: 'ERROR', key: 'color' } as TSetResponse)),
            setTypo()
                .then(() => ({ status: 'OK', key: 'typo' } as TSetResponse))
                .catch(() => ({ status: 'ERROR', key: 'typo' } as TSetResponse)),
            setIcon()
                .then(() => ({ status: 'OK', key: 'icon' } as TSetResponse))
                .catch(() => ({ status: 'ERROR', key: 'icon' } as TSetResponse)),
        ]),
    )

    Object.entries(results).forEach(([key, status]) =>
        console.log(`${key}.json 업데이트에 ${status === 'OK' ? '성공' : '실패'}했습니다.`),
    )
}

main()
