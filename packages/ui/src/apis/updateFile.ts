import * as fs from 'fs'
import path from 'path'
import axios from 'axios'
import type { IFigmaDocument, IFrame } from '../types/figma'

const updateOrCreateFile = (targetFilePath: string, content: string) => {
    fs.writeFileSync(targetFilePath, content, {
        encoding: 'utf-8',
    })
}

const updateOrCreateFigmaFile = (content: string, fileName: string) => {
    const targetFilePath = path.resolve(__dirname, `../json/${fileName}.json`)

    updateOrCreateFile(targetFilePath, content)
}

const updateFigmaFiles = async ({
    nodeId,
    fileName,
    transform,
}: {
    nodeId: string
    fileName: string
    transform(data: IFrame): any
}) => {
    try {
        const res = await axios.get<IFigmaDocument>(
            `https://api.figma.com/v1/files/IjtwzoijQFoW2zEiO4N8BU/nodes?ids=${nodeId}`,
            {
                headers: {
                    'X-Figma-Token': 'figd_wth0TR24ae9NCzOVyvunK8SYdL4dAHas2hDAg4Cf',
                },
                transformResponse: [function(data) {
                    try {
                            const figmaContent: IFigmaDocument = JSON.parse(data)
                            const document = figmaContent.nodes[nodeId].document
                            return transform(document)
                    } catch (error) {
                        throw error
                    }
                    
                }],
            },
        )

        updateOrCreateFigmaFile(JSON.stringify(res.data, undefined, 4), fileName)
    } catch (e) {
        console.error(e)
        throw e
    }
}

export default updateFigmaFiles
