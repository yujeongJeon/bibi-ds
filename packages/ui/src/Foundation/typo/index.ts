import { css, FlattenSimpleInterpolation } from 'styled-components'

import typoSet from '../../json/typo.json'
import { TTypeStyle } from '../../types/figma'
import { TTypoKey } from '../../types/typo'

const base = css`
    font-style: normal;
`

export type TTypo = FlattenSimpleInterpolation

const TYPOS = Object.entries<TTypeStyle>(typoSet).reduce(
    (result, [key, value]) => {
        const { fontFamily, fontWeight, fontSize, lineHeightPx } = value

        result[key as TTypoKey] = css`
            ${base}
            font-family: ${fontFamily};
            font-weight: ${fontWeight};
            font-size: ${fontSize}px;
            line-height: ${Math.round(lineHeightPx)}px;
        `
        return result
    },
    {} as {
        [key in TTypoKey]: TTypo
    },
)

export { TYPOS }
