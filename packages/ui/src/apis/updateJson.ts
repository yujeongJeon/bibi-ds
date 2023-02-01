import path from 'path'
import { isAxiosError } from 'axios'
import type { IFrame } from '../types/figma'
import getFileNode from './getFileNode'
import { writeFile } from '../utils/file'

const JSON_PATH = path.resolve(__dirname, `../json/`)

const updateJson = async ({
    nodeId,
    fileName,
    transform,
}: {
    nodeId: string
    fileName: string
    transform(data: IFrame): any
}) => {
    try {
        const data = await getFileNode({ nodeId, transform })

        writeFile(JSON.stringify(data, undefined, 4), {
            name: `${fileName}.json`,
            path: JSON_PATH,
        })
    } catch (error: unknown) {
        if (isAxiosError(error) || error instanceof Error) {
            console.error(`[${fileName}] ${error.message}`)
        }

        throw error
    }
}

export default updateJson
