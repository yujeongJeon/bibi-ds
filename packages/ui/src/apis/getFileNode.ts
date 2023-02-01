import axios, { isAxiosError } from 'axios'
import { FIGMA_TOKEN } from '../configs/figma'
import { IFigmaDocument, IFrame } from '../types/figma'

const getFileNode = async ({ nodeId, transform }: { nodeId: string; transform(data: IFrame): any }) => {
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

        return res.data
    } catch (error) {
        if (isAxiosError(error) || error instanceof Error) {
            console.error(error)
        }

        throw error
    }
}

export default getFileNode
