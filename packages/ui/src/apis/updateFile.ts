import * as fs from 'fs'
import path from 'path'
import axios, { isAxiosError } from 'axios'
import type { IFigmaDocument, IFrame } from '../types/figma'
import { FIGMA_TOKEN } from '../configs/figma'

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
        if (!FIGMA_TOKEN) {
            throw new Error('figma access token이 없습니다. .env에 설정해주세요.')
        }

        const res = await axios.get<IFigmaDocument>(
            `https://api.figma.com/v1/files/IjtwzoijQFoW2zEiO4N8BU/nodes?ids=${nodeId}`,
            {
                headers: {
                    'X-Figma-Token': FIGMA_TOKEN,
                },
                transformResponse: [
                    function (data) {
                        try {
                            const figmaContent: IFigmaDocument = JSON.parse(data)
                            const document = figmaContent.nodes[nodeId].document
                            return transform(document)
                        } catch (error) {
                            throw error
                        }
                    },
                ],
            },
        )

        updateOrCreateFigmaFile(JSON.stringify(res.data, undefined, 4), fileName)
    } catch (error: unknown) {
        if (isAxiosError(error) || error instanceof Error) {
            console.error(`[${fileName}] ${error.message}`)
        }

        throw error
    }
}

export default updateFigmaFiles
