import { InputHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { Combobox } from '@headlessui/react'
import styled from 'styled-components'
import { COLORS, TYPOS } from 'ui'

function AutoSelectInput({
    list,
    onSearch,
    placeholder,
}: {
    list: string[]
    onSearch(items: string[]): void
    placeholder?: string
}) {
    const [selectedItem, setSelectedItem] = useState('')
    const [searchWord, setSearchWord] = useState('')

    const filteredItems = useMemo(
        () =>
            searchWord === ''
                ? list
                : list.filter((item) => {
                      return item.toLowerCase().includes(searchWord.toLowerCase())
                  }),
        [searchWord],
    )

    useEffect(() => {
        onSearch(filteredItems)
    }, [filteredItems, onSearch])

    useEffect(() => {
        selectedItem && setSearchWord(selectedItem)
    }, [selectedItem])

    return (
        <Combobox value={selectedItem} onChange={setSelectedItem}>
            <Container>
                <Input
                    onChange={(event) => setSearchWord(event.target.value)}
                    autoComplete="off"
                    placeholder={placeholder}
                />
                <OptionBox>
                    {filteredItems.map((item) => (
                        <Combobox.Option key={item} value={item}>
                            <Option>{item}</Option>
                        </Combobox.Option>
                    ))}
                </OptionBox>
            </Container>
        </Combobox>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
`

const Input = styled(Combobox.Input)<InputHTMLAttributes<HTMLInputElement>>`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    height: 45px;
    border: 1px solid ${COLORS.BORDER.PRIMARY};
    width: calc(100% - 32px);
    padding: 4px 16px;
    border-radius: 777px;
    outline: none;
    &:focus {
        outline: 1px solid ${COLORS.BORDER.INVERSE};
    }
    &::placeholder {
        color: ${COLORS.GRAYSCALE.GRAY_3};
    }
`

const OptionBox = styled(Combobox.Options)`
    width: calc(100% - 40px);
    list-style: none;
    max-height: 250px;
    overflow: auto;
    padding: 10px 20px;
    border: 1px solid ${COLORS.BORDER.PRIMARY};
    border-radius: 16px;
    margin: 12px 0;
    background: #fff;
`

const Option = styled.div`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    padding: 10px 0;
`

export default AutoSelectInput
