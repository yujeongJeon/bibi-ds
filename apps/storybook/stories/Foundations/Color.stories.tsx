import { useState } from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOS } from 'ui'
import { Column, InlineColumn, Row } from '../../common/Flex'
import useCopy from '../../hooks/useCopy'

const Rectangle = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    width: 237px;
    height: 80px;
    margin: 0 0 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;
    transition: all 0.2s ease-in;
    cursor: pointer;
`

const Text = styled.span<{ isCopied: boolean; isHover: boolean }>`
    ${TYPOS.PRETENDARD_CAPTION_MEDIUM}
    background-color: ${COLORS.GRAYSCALE['GRAY_0.1']};
    padding: 2.5px 6px;
    border-radius: 2px;
    color: ${({ isCopied }) => (isCopied ? COLORS.BRAND.MAINGREEN_DEFAULT : COLORS.GRAYSCALE.GRAY_10)};
    transition: opacity 0.2s linear;
    ${({ isHover }) =>
        isHover
            ? css`
                  opacity: 1;
                  visibility: visible;
              `
            : css`
                  opacity: 0;
                  visibility: hidden;
              `}
`

const COPY_TEXT = {
    before: 'Copy',
    after: 'Copied!',
}

const ColorViewer = ({ color, tokenName }: { color: string; tokenName: string }) => {
    const [isShowTooltip, toggleTooltip] = useState(false)

    const { copy, copyText, isCopied } = useCopy({ text: COPY_TEXT })

    const handleMouseOver = (isEnter: boolean) => toggleTooltip(isEnter)

    const copyToken = () => copy(tokenName)

    return (
        <Rectangle
            color={color}
            onMouseEnter={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseOver(false)}
            onClick={copyToken}
        >
            {
                <Text isCopied={isCopied} isHover={isShowTooltip}>
                    {copyText}
                </Text>
            }
        </Rectangle>
    )
}

const ItemText = styled.span`
    ${TYPOS.PRETENDARD_HEAD4_BOLD}
    color: ${COLORS.GRAYSCALE.GRAY_8};
    padding: 4px 7px;
    background-color: ${COLORS.BACKGROUND.SECONDARY};
    border-radius: 2px;
    font-size: 14px;
`

const ListRow = styled(Row)`
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const List = ({ value, colorRootName }: { value: Record<string, string>; colorRootName: string }) => {
    const getRightPropReference = (key: string) => (key.indexOf('.') > -1 ? `[\'${key}\']` : `.${key}`)

    return (
        <ListRow justifyContent={'flex-start'}>
            {Object.entries(value).map(([key, value]) => (
                <InlineColumn key={key}>
                    <ColorViewer color={value} tokenName={`COLORS.${colorRootName}${getRightPropReference(key)}`} />
                    <div
                        style={{
                            padding: '12px 0',
                        }}
                    >
                        <ItemText>{key}</ItemText>
                    </div>
                </InlineColumn>
            ))}
        </ListRow>
    )
}

const Title = styled.div`
    ${TYPOS.PRETENDARD_HEAD2_BOLD}
    margin-bottom: 12px;
`

export const Color = () => (
    <>
        {Object.entries(COLORS)
            .sort(([key1], [key2]) => key1.split('_')[0].localeCompare(key2.split('_')[0]))
            .map(([key, value]) => (
                <Column key={key} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <Title>{key}</Title>
                    <List value={value} colorRootName={key} />
                </Column>
            ))}
    </>
)

export default {
    title: "Bibi's Design System/Foundation/Color",
    component: Color,
}
