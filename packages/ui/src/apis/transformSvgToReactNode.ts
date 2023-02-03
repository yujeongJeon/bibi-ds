import axios from 'axios'
import { FIGMA_TOKEN } from '../configs/figma'
import { TImageResponse } from '../types/figma'
import { transform } from '@svgr/core'
import { snakeToPascalString } from '../utils'
import { createSettledResponse } from '../utils/promise'
import { writeFile } from '../utils/file'
import { getFigmaApi } from '../utils/getFigmaApi'
import { svgTemplate } from '../templates/svgTemplate'

const updateImportFile = (componentNames: string[]) =>
    componentNames.reduce((str, componentName, index) => {
        const format = `export {default as ${componentName}} from './${componentName}'`
        return `${str}${str ? '\n' + format : format}${index === componentNames.length - 1 ? '\n' : ''}`
    }, '')

/**
 * @constant FILL_PROPS svgCode 에서 props.fill로 대체할 값들
 */
const FILL_PROPS = ['#121D2E', '#000', '#172E48', '#181600', '#D7DBE2'] as const

type TFillProps = (typeof FILL_PROPS)[number]
type TReplaceAttrProps = Record<TFillProps, '{props.fill}'>

const replaceFillProps = (): TReplaceAttrProps =>
    FILL_PROPS.reduce((obj, key) => ({ ...obj, [key]: '{props.fill}' }), {} as TReplaceAttrProps)

const transformSvgCode = async ([imageId, url]: [string, string], ids: Record<string, string>, path: string) => {
    const res = await axios.get(url, {
        headers: {
            'X-Figma-Token': FIGMA_TOKEN,
            'Content-Type': 'text/html',
        },
    })
    const svgCode = res.data
    const componentName = snakeToPascalString(ids[imageId].replace(/[\-\s\!]+/gi, '_'))
    const jsCode = await transform(
        svgCode,
        {
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
            icon: true,
            jsxRuntime: 'automatic',
            typescript: true,
            memo: true,
            svgProps: {
                width: '{props.size.width}',
                height: '{props.size.height}',
            },
            expandProps: false,
            replaceAttrValues: replaceFillProps(),
            template: svgTemplate,
        },
        {
            componentName,
            filePath: path,
        },
    )
    writeFile(jsCode, { name: `${componentName}.tsx`, path })
    return { key: componentName, status: 'OK' }
}

const transformSvgToReactNode = async (ids: Record<string, string>, { path }: { path: string }) => {
    try {
        if (!FIGMA_TOKEN) {
            throw new Error('figma access token이 없습니다. .env에 설정해주세요.')
        }

        const res = await getFigmaApi().get<TImageResponse>('/images/IjtwzoijQFoW2zEiO4N8BU', {
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
            },
            params: {
                ids: Object.keys(ids)
                    .map((id) => decodeURIComponent(id))
                    .join(','),
                format: 'svg',
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
                    const res = await transformSvgCode(image, ids, path)
                    return { ...res }
                }),
            ),
        )

        const importFile = updateImportFile(Object.keys(results))
        writeFile(importFile, { name: 'index.ts', path })
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default transformSvgToReactNode
