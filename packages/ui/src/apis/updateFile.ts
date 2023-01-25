import * as fs from 'fs'
import path from 'path'
import axios from 'axios'
import type { TFigmaFrame } from '../types/figma'

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
    params,
    transform,
}: {
    nodeId: string
    fileName: string
    params: string
    transform(data: any): any
}) => {
    const res = await axios.get<TFigmaFrame>(
        `https://api.figma.com/v1/files/IjtwzoijQFoW2zEiO4N8BU/nodes?ids=${params}`,
        {
            headers: {
                'X-Figma-Token': 'figd_wth0TR24ae9NCzOVyvunK8SYdL4dAHas2hDAg4Cf',
            },
            transformResponse: [transform],
        },
    )

    updateOrCreateFigmaFile(JSON.stringify(res.data, undefined, 4), fileName)
}

export default updateFigmaFiles