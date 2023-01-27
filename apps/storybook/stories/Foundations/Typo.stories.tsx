import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TYPOS } from 'ui'
import type { TTypo } from 'ui'
import { Column, Flex, InlineColumn, Row } from '../../common/Component'
import { snakeToPascalString } from '../../utils'

const BOX_SIZE = 500
const TOKEN_CELL_SIZE = 220
const DESC_CELL_SIZE = 150

const Box = styled(Row).attrs({
    justifyContent: 'flex-start',
})`
    border: 1px dotted ${COLORS.BORDER.SECONDARY};
    border-bottom: 0 none;
    padding: 15px 25px;
    width: ${BOX_SIZE}px;

    &:last-child {
        border-bottom: 1px dotted ${COLORS.BORDER.SECONDARY};
    }
`

const TokenName = styled(Row).attrs({
    justifyContent: 'flex-start',
    alignItems: 'center',
})`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM};
    width: ${TOKEN_CELL_SIZE}px;
    padding: 0px 10px 0 0;
`

const Desc = styled(Column).attrs({
    justifyContent: 'center',
    alignItems: 'flex-start',
})`
    width: ${DESC_CELL_SIZE}px;
    padding: 7px 17px 7px 0;
    border-right: 1px dotted ${COLORS.BORDER.SECONDARY};
`

const Example = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center',
})<{ typo: TTypo }>`
    padding: 7px 0 7px 17px;
    ${({ typo }) => typo};
`

const P = styled.p`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    color: ${COLORS.GRAYSCALE.GRAY_7};
    margin: 0;
`

const DISPLAY_ORDER: Record<string, number> = {
    DISPLAY: 0,
    HEAD1: 1,
    HEAD2: 2,
    HEAD3: 3,
    HEAD4: 4,
    BODY1: 5,
    BODY2: 6,
    CAPTION: 7,
}

const Seperator = styled.span`
    &::before {
        content: ' ';
        border-right: 1px solid ${COLORS.GRAYSCALE.GRAY_2};
        margin: 0 6px 0 3px;
    }
`

const HeaderRow = styled(Row)`
    background-color: ${COLORS.GRAYSCALE.GRAY_9};
    color: ${COLORS.GRAYSCALE['GRAY_0.1']};
    width: ${BOX_SIZE}px;
    padding: 15px 25px;
    border: 1px solid ${COLORS.GRAYSCALE.GRAY_9};
`

const Header = styled(Column).attrs({
    alignItems: 'flex-start',
})<{ width: number }>`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    width: ${({ width }) => width}px;
`

type TFontInfo = {
    fontSize: string
    lineHeight: string
}

const styleToNumber = (str?: string) => (str ? +str.replace('px', '') : NaN)

const calcLineHeightPercentage = (fontSize: number, lineHeight: number) => Math.round((lineHeight / fontSize) * 100)

const TypoBox = ({ token, value }: { token: string; value: TTypo }) => {
    const $desc = useRef<HTMLDivElement>(null)
    const [fontFamily, usage, fontWeight] = token.split('_').map(snakeToPascalString)
    const [fontStyles, setFontStyles] = useState<TFontInfo>({} as TFontInfo)

    useEffect(() => {
        if ($desc.current) {
            const { fontSize, lineHeight } = window.getComputedStyle($desc.current)
            setFontStyles({
                fontSize,
                lineHeight,
            })
        }
    }, [$desc])

    const { fontSize, lineHeight } = fontStyles

    return (
        <Box>
            <TokenName>
                <pre
                    style={{
                        backgroundColor: COLORS.BACKGROUND.SECONDARY,
                        margin: 0,
                        padding: '1px 2px',
                    }}
                >
                    {token}
                </pre>
            </TokenName>
            <Desc>
                <P>{fontFamily}</P>
                <P>
                    {fontWeight}
                    <Seperator />
                    {fontSize}
                </P>
                <P>
                    {lineHeight} ({calcLineHeightPercentage(styleToNumber(fontSize), styleToNumber(lineHeight))}%)
                </P>
            </Desc>
            <Example typo={value} ref={$desc}>
                제목
            </Example>
        </Box>
    )
}

export const Typo = () => {
    const TOKEN_CELL_SIZE_WITH_EXTRA = TOKEN_CELL_SIZE + 10
    const DESC_CELL_SIZE_WITH_EXTRA = DESC_CELL_SIZE + 17 + 1
    return (
        <div>
            <HeaderRow>
                <Header width={TOKEN_CELL_SIZE_WITH_EXTRA}>토큰</Header>
                <Header width={DESC_CELL_SIZE_WITH_EXTRA}>스타일</Header>
                <Header width={BOX_SIZE - TOKEN_CELL_SIZE_WITH_EXTRA - DESC_CELL_SIZE_WITH_EXTRA}>예시</Header>
            </HeaderRow>
            <Column alignItems={'flex-start'}>
                <InlineColumn alignItems={'flex-start'}>
                    {Object.entries(TYPOS)
                        .sort(([key1], [key2]) => {
                            const [, usage1] = key1.split('_')
                            const [, usage2] = key2.split('_')
                            return DISPLAY_ORDER[usage1] - DISPLAY_ORDER[usage2]
                        })
                        .map(([key, value]) => {
                            return <TypoBox key={key} token={key} value={value} />
                        })}
                </InlineColumn>
            </Column>
        </div>
    )
}

export default {
    title: "Bibi's Design System/Foundation/Typo",
    component: Typo,
}
