import updateFigmaFiles from './src/apis/updateFile'
import { COLOR_NODE_ID, COLOR_NODE_PARAM } from './src/configs/figma'
import { TFigmaDocument, IFrame } from './src/types/figma'
import { camelToSnakeCase } from './src/utils'
import { rgbaToHex } from './src/utils/color'

async function main() {
    await updateFigmaFiles({
        nodeId: COLOR_NODE_ID,
        fileName: 'color',
        params: COLOR_NODE_PARAM,
        transform(data) {
            const figmaContent: TFigmaDocument = JSON.parse(data)
            const document = figmaContent.nodes[COLOR_NODE_ID].document

            const colorSet: Record<string, string> = document.children
                .filter((children): children is IFrame => children.type === 'FRAME') // Grayscale, Sub ...
                .map(({ name, children }) => ({
                    name,
                    children: children.filter((child): child is IFrame => child.type === 'FRAME'), // [Gray_10, Gray_9, ...]
                }))
                .reduce(
                    (root, { name, children }) => ({
                        ...root,
                        [name.toUpperCase()]: children
                            .map(({ name, children }) => ({
                                name: camelToSnakeCase(name.replace(/\s+/, '')).toUpperCase(),
                                colors: children.filter((child) => child.type === 'VECTOR')[0].fills[0].color,
                            }))
                            .reduce(
                                (colorSet, { name, colors }) => ({
                                    ...colorSet,
                                    [name]: rgbaToHex(colors),
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

main()
