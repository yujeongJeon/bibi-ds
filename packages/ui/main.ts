/* eslint-disable import/no-unresolved */
import path from 'path'
import getFileNode from './src/apis/getFileNode'
import transformSvgToReactNode from './src/apis/transformSvgToReactNode'
import updateJson from './src/apis/updateJson'
import { COLOR_NODE_ID, ICON_NODE_ID, TYPO_NODE_ID } from './src/configs/figma'
import { TColorSetFrame, TColorReturnType, TColorDocumentFrame } from './src/types/color'
import { TIconDocumentFrame, TSizeGroup, TSizeReturnType } from './src/types/icon'
import { TTypoDocumentFrame, TTypoFrame, TUsageFrame } from './src/types/typo'
import { camelToSnakeCase, toSnakeCaseBySeperator } from './src/utils'
import { rgbaToHex } from './src/utils/color'
import { isComponent, isFrame, isGroup, isText, isVector } from './src/utils/figma'
import { createSettledResponse, settle, TSetResponse } from './src/utils/promise'

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
                                colors: children.filter(isVector)[0].fills[0].color, // VECTOR 객체의 fills 속성을 추출
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
                    [toSnakeCaseBySeperator(name)]: children.filter(isText)[0].style,
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
            const components = document.children.filter(isComponent)

            const ids = Object.fromEntries(components.map(({ id, name }) => [id, name]))
            await transformSvgToReactNode(ids, { path: ICON_PATH })
        },
    })
}

async function main() {
    const results = createSettledResponse<TSetResponse, 'color' | 'typo' | 'icon'>(
        await Promise.allSettled([settle(setColor, 'color'), settle(setTypo, 'typo'), settle(setIcon, 'icon')]),
    )

    Object.entries(results).forEach(([key, status]) =>
        console.log(`${key}.json 업데이트에 ${status === 'OK' ? '성공' : '실패'}했습니다.`),
    )
}

main()
