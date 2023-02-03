import { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { COLORS, ICON_SIZE, TYPOS } from 'ui'
import { TSvgReactNode } from '../types/svg'
import { flattenObject } from '../utils'
import { Column, Row } from './Flex'
import SelectBox from './SelectBox'
import { getKeyByValue } from '../utils/index'
import { Button } from './Button'
import useCopy from '../hooks/useCopy'

const iconSizeList = Object.keys(ICON_SIZE).reduce((obj, key) => ({ ...obj, [key]: key }), {} as Record<string, string>)

const DISPLAY_COLORS = flattenObject(COLORS, undefined, {
    excludes: ['BACKGROUND', 'BORDER'],
})

function IconController({ targetIcon: TargetIcon, name }: { targetIcon: TSvgReactNode; name: string }) {
    const [size, setSize] = useState<string>(Object.values(iconSizeList)[0])
    const [color, setColor] = useState<string>(COLORS.GRAYSCALE.GRAY_10)

    const { copy, copyText, isCopied } = useCopy({
        text: {
            before: 'Copy code',
            after: 'Copied!',
        },
    })

    const $codeViewer = useRef<HTMLPreElement>(null)

    const handleCopy = () => {
        const componentCode = $codeViewer.current?.innerText
        componentCode && copy(componentCode)
    }

    return (
        <ModalContainer>
            <Controllers>
                <SelectBoxes>
                    <SelectBox title={'Size'} list={iconSizeList} onSelect={(value) => setSize(value)} />
                    <SelectBox
                        title={'Color'}
                        list={DISPLAY_COLORS}
                        onSelect={(value) => {
                            console.log(value)
                            setColor(value)
                        }}
                        displayBy="key"
                        width={270}
                    />
                </SelectBoxes>
                <CodeView>
                    <Code ref={$codeViewer}>
                        {`import {${name}} from 'ui'
                        
                        <${name} size={ICON_SIZE.${size}} fill={COLORS.${getKeyByValue(DISPLAY_COLORS, color)}} />`}
                    </Code>
                    <CopyButton onClick={handleCopy} isCopied={isCopied}>
                        {copyText}
                    </CopyButton>
                </CodeView>
            </Controllers>
            <Preview>
                {TargetIcon && <TargetIcon size={ICON_SIZE[size as keyof typeof ICON_SIZE]} fill={color} />}
            </Preview>
        </ModalContainer>
    )
}

const ModalContainer = styled(Row)`
    padding: 60px 20px 20px 20px;
    height: 200px;
`

const Controllers = styled(Column).attrs({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})`
    width: 460px;
    height: 200px;
`

const SelectBoxes = styled(Row)`
    gap: 10px;
`

const CodeView = styled(Column)`
    width: 414px;
    margin: 10px 10px 0 0;
    height: 105px;
    color: ${COLORS.GRAYSCALE.GRAY_8};
    background-color: ${COLORS.BACKGROUND.SECONDARY};
    padding: 10px 18px;
    position: relative;
`

const Code = styled.pre`
    white-space: pre-line;
    text-align: left;
    margin: 0;
`

const CopyButton = styled(Button)<{ isCopied: boolean }>`
    ${TYPOS.PRETENDARD_BODY2_MEDIUM}
    background: ${COLORS.BACKGROUND.PRIMARY};
    color: ${COLORS.GRAYSCALE.GRAY_9};
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px 12px;
    border: 1px solid ${COLORS.BORDER.PRIMARY};

    ${({ isCopied }) => css`
        color: ${isCopied ? COLORS.BRAND.MAINGREEN_DEFAULT : COLORS.GRAYSCALE.GRAY_9};
    `}

    &:hover {
        background-color: ${COLORS.BACKGROUND.POSITIVE};
    }
`

const Preview = styled(Column)`
    width: 200px;
    height: 200px;
    outline: 1px solid ${COLORS.BORDER.PRIMARY};
    background-color: #fff;
`

export default IconController
