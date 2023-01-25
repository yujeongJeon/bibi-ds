import updateFigmaFiles from './src/apis/updateFile'
import { COLOR_NODE_ID, COLOR_NODE_PARAM } from './src/configs/figma'
import { TFigmaFrame, TFrameChildren } from './src/types/figma'

type TFilteredChildren = Pick<TFrameChildren, 'name' | 'type' | 'fills'>

async function main() {
    await updateFigmaFiles({
        nodeId: COLOR_NODE_ID,
        fileName: 'color',
        params: COLOR_NODE_PARAM,
        transform(data) {
            const figmaContent: TFigmaFrame = JSON.parse(data)
            const document = figmaContent.nodes[COLOR_NODE_ID].document

            const children: TFilteredChildren[] = document.children
                .filter(({ type }) => type === 'VECTOR')
                .map(({ name, type, fills }) => ({ name, type, fills }))
            document.children = children as TFrameChildren[]

            const content = JSON.parse(JSON.stringify(document))
            return content
        },
    })
}

main()
