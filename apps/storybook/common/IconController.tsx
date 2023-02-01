import { useState } from 'react'
import styled from 'styled-components'
import { COLORS, ICON_SIZE, TIconSize, TYPOS } from 'ui'
import { TSvgReactNode } from '../types/svg'
import { flattenObject } from '../utils'
import { Column, Row } from './Flex'
import SelectBox from './SelectBox'

const iconSizeList = Object.keys(ICON_SIZE).reduce((obj, key) => ({ ...obj, [key]: key }), {} as Record<string, string>)

function IconController({ targetIcon: TargetIcon }: { targetIcon: TSvgReactNode }) {
    const [size, setSize] = useState<TIconSize>(ICON_SIZE.S)
    const [color, setColor] = useState<string>(COLORS.GRAYSCALE.GRAY_10)

    return (
        <ModalContainer>
            <Controllers>
                <SelectBoxes>
                    <SelectBox
                        title={'Size'}
                        list={iconSizeList}
                        onSelect={(value) => setSize(ICON_SIZE[value as keyof typeof ICON_SIZE])}
                    />
                    <SelectBox
                        title={'Color'}
                        list={flattenObject(COLORS, undefined, {
                            excludes: ['BACKGROUND', 'BORDER'],
                        })}
                        onSelect={(value) => {
                            console.log(value)
                            setColor(value)
                        }}
                        displayBy="key"
                        width={270}
                    />
                </SelectBoxes>
                <CodeView>🚧 Code section</CodeView>
            </Controllers>
            <Preview>{TargetIcon && <TargetIcon width={size.width} height={size.height} fill={color} />}</Preview>
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
    ${TYPOS.PRETENDARD_HEAD4_BOLD}
    width: 460px;
    margin: 10px auto;
    height: 105px;
    color: ${COLORS.GRAYSCALE.GRAY_5};
`

const Preview = styled(Column)`
    width: 200px;
    height: 200px;
    outline: 1px solid ${COLORS.BORDER.PRIMARY};
    background-color: #fff;
`

export default IconController
