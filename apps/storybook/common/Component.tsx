import styled, { css, CSSProperties } from 'styled-components'

type TFlexProps = {
    justifyContent?: CSSProperties['justifyContent']
    alignItems?: CSSProperties['alignItems']
}

export const Flex = styled.div<TFlexProps>`
    ${({ justifyContent, alignItems }) => css`
        display: flex;
        justify-content: ${justifyContent || 'center'};
        align-items: ${alignItems || 'center'};
    `}
`

const Row = styled(Flex)`
    flex-direction: row;
`

const Column = styled(Flex)`
    flex-direction: column;
`

const InlineColumn = styled.div<TFlexProps>`
    ${({ justifyContent, alignItems }) => css`
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: ${justifyContent || 'center'};
        align-items: ${alignItems || 'center'};
    `}
`

export { Row, Column, InlineColumn }
