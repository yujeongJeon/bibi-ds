import updateFigmaFiles from './src/apis/updateFile'
import { COLOR_NODE_ID, COLOR_NODE_PARAM } from './src/configs/figma'
import { TFigmaDocument, IFrame, ICommon } from './src/types/figma'
import { camelToSnakeCase } from './src/utils'
import { rgbaToHex } from './src/utils/color'

function isFrameInObject(children: ICommon): children is IFrame {
    return children.type === 'FRAME'
}

async function setColor() {
    await updateFigmaFiles({
        nodeId: COLOR_NODE_ID,
        fileName: 'color',
        params: COLOR_NODE_PARAM,
        transform(data) {
            const figmaContent: TFigmaDocument = JSON.parse(data)
            const document = figmaContent.nodes[COLOR_NODE_ID].document

            const colorSet: Record<string, Record<string, string>> = document.children
                .filter(isFrameInObject) // 1-depth : Sub, Grayscale, ...
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
                    {},
                )

            const content = JSON.parse(JSON.stringify(colorSet))
            return content
        },
    })
}

setColor()
