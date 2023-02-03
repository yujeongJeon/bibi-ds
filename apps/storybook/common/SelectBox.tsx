import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { COLORS, IcDown, ICON_SIZE, TIconSize, TYPOS } from 'ui'
import { Column, Row } from './Flex'
import styled, { css } from 'styled-components'
import { getKeyByValue } from '../utils'
import { IconBox } from './Icon'

export default function SelectBox({
    title,
    list,
    onSelect,
    displayBy = 'value',
    width,
}: {
    title?: string
    list: Record<string, string>
    onSelect(value: string): void
    displayBy?: 'key' | 'value'
    width?: number
}) {
    const [selected, setSelected] = useState<string>('')

    const handleSelect = (value: string) => {
        setSelected(value)
        onSelect(value)
    }

    return (
        <Column alignItems={'flex-start'}>
            {title && <Title>{title}</Title>}
            <Listbox value={selected} onChange={handleSelect}>
                <Container width={width}>
                    <Button>
                        <span>{(displayBy === 'value' ? selected : getKeyByValue(list, selected)) || '선택'}</span>
                        <IconBox size={ICON_SIZE.S} marginLeft={3}>
                            <IcDown size={ICON_SIZE.S} fill={COLORS.GRAYSCALE.GRAY_10} />
                        </IconBox>
                    </Button>
                    <Options>
                        {Object.entries(list).map(([key, value]) => (
                            <Listbox.Option
                                key={key}
                                style={{
                                    padding: '10px 0',
                                }}
                                value={value}
                            >
                                {({ selected }) => <ItemText selected={selected}>{key}</ItemText>}
                            </Listbox.Option>
                        ))}
                    </Options>
                </Container>
            </Listbox>
        </Column>
    )
}

const ItemText = styled.span<{ selected: boolean }>`
    ${({ selected }) => (selected ? TYPOS.PRETENDARD_BODY2_BOLD : TYPOS.PRETENDARD_BODY2_MEDIUM)}
    color: ${({ selected }) => (selected ? COLORS.BRAND.MAINGREEN_DARK : COLORS.GRAYSCALE.GRAY_7)};
`

const Title = styled(Row)`
    ${TYPOS.PRETENDARD_HEAD3_BOLD};
    text-align: left;
    margin-bottom: 8px;
    padding: 0 10px;
`

const Button = styled(Listbox.Button)`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    border-radius: 55px;
    background-color: #fff;
    border: 1px solid ${COLORS.BORDER.PRIMARY};
    min-width: 120px;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`

const Container = styled(Column)<{ width?: number }>`
    position: relative;
    width: ${({ width }) => `${width}px` || '100%'};
    z-index: 1;
`

const Options = styled(Listbox.Options)`
    list-style: none;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 10px;
    text-align: left;
    max-height: 150px;
    overflow: auto;
    border: 1px solid ${COLORS.BORDER.PRIMARY};
    margin-top: 8px;
    border-radius: 12px;
`
