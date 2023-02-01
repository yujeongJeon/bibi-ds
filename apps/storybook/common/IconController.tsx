import { useState } from 'react'
import styled from 'styled-components'
import { COLORS, ICON_SIZE, TIconSize } from 'ui'
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
                <Column>Code section</Column>
            </Controllers>
            <Preview>{TargetIcon && <TargetIcon width={size.width} height={size.height} fill={color} />}</Preview>
        </ModalContainer>
    )
}

const ModalContainer = styled(Row)`
    padding: 60px 20px 20px 20px;
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

const Preview = styled(Column)`
    width: 200px;
    height: 200px;
`

export default IconController
