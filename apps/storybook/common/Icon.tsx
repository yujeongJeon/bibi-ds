import styled, { css } from 'styled-components'
import { TIconSize } from 'ui'

export const IconBox = styled.span<{ size: TIconSize; marginLeft?: number; marginRight?: number }>`
    ${({ size, marginLeft, marginRight }) => css`
        width: ${size.width}px;
        height: ${size.height}px;
        margin-left: ${marginLeft || 0}px;
        margin-right: ${marginRight || 0}px;
    `}
`
