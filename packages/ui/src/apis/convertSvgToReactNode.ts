import axios from 'axios'
import { FIGMA_TOKEN } from '../configs/figma'
import { TImageResponse } from '../types/figma'
import { transform } from '@svgr/core'
import path from 'path'
import fs from 'fs'
import { snakeToPascalString } from '../utils'

const ICON_PATH = path.resolve(__dirname, '../Foundation/icon/')

const updateOrCreateFile = (targetFilePath: string, content: string) => {
    fs.writeFileSync(targetFilePath, content, {
        encoding: 'utf-8',
    })
}

const createIconComponent = (content: string, fileName: string) => {
    updateOrCreateFile(`${ICON_PATH}/${fileName}`, content)
}

const convertSvgToReactNode = async (ids: Record<string, string>) => {
    try {
        if (!FIGMA_TOKEN) {
            throw new Error('figma access token이 없습니다. .env에 설정해주세요.')
        }

        const res = await axios.get<TImageResponse>(`https://api.figma.com/v1/images/IjtwzoijQFoW2zEiO4N8BU`, {
            params: {
                ids: Object.keys(ids)
                    .map((id) => decodeURIComponent(id))
                    .join(','),
                format: 'svg',
            },
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
            },
        })

        if (!res.data.images) {
            throw new Error('icon image url을 가져올 수 없습니다.')
        }

        const { images, err } = res.data

        if (err) {
            throw new Error(`[${err}] 이미지 url을 가져오는 데 문제가 발생했습니다.`)
        }

        Promise.allSettled(
            Object.entries(images).map(async ([imageId, url]) => {
                const res = await axios.get(url, {
                    headers: {
                        'X-Figma-Token': FIGMA_TOKEN,
                        'Content-Type': 'text/html',
                    },
                })
                const svgCode = res.data
                const componentName = `${snakeToPascalString(ids[imageId].replace(/[\-\s\!]+/gi, '_'))}`
                const jsCode = await transform(
                    svgCode,
                    {
                        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
                        icon: true,
                        jsxRuntime: 'automatic',
                        typescript: true,
                        memo: true,
                    },
                    {
                        componentName,
                        filePath: ICON_PATH,
                    },
                )
                createIconComponent(jsCode, `${componentName}.tsx`)
                return jsCode
            }),
        )
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default convertSvgToReactNode
