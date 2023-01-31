import axios from 'axios'
import { FIGMA_TOKEN } from '../configs/figma'
import { TImageResponse } from '../types/figma'
import { transform } from '@svgr/core'
import path from 'path'
import fs from 'fs'
import { snakeToPascalString } from '../utils'
import { createSettledResponse } from '../utils/promise'

const ICON_PATH = path.resolve(__dirname, '../Foundation/icon/')

const updateOrCreateFile = (targetFilePath: string, content: string) => {
    fs.writeFileSync(targetFilePath, content, {
        encoding: 'utf-8',
    })
}

const createFile = (content: string, fileName: string) => {
    updateOrCreateFile(`${ICON_PATH}/${fileName}`, content)
}

const updateImportFile = (componentNames: string[]) =>
    componentNames.reduce((str, componentName, index) => {
        const format = `export {default as ${componentName}} from './${componentName}'`
        return `${str}${str ? '\n' + format : format}${index === componentNames.length - 1 ? '\n' : ''}`
    }, '')

const transformSvgCode = async ([imageId, url]: [string, string], ids: Record<string, string>) => {
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
            svgProps: {
                width: '{props.width}',
                height: '{props.height}',
            },
            replaceAttrValues: {
                '#121D2E': '{props.fill}',
                '#000': '{props.fill}',
                '#172E48': '{props.fill}',
                '#181600': '{props.fill}',
                '#D7DBE2': '{props.fill}',
            },
        },
        {
            componentName,
            filePath: ICON_PATH,
        },
    )
    createFile(jsCode, `${componentName}.tsx`)
    return { key: componentName, status: 'OK' }
}

const transformSvgToReactNode = async (ids: Record<string, string>) => {
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

        const results = createSettledResponse(
            await Promise.allSettled(
                Object.entries(images).map(async (image) => {
                    const res = await transformSvgCode(image, ids)
                    return { ...res }
                }),
            ),
        )

        createFile(updateImportFile(Object.keys(results)), 'index.ts')
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default transformSvgToReactNode
