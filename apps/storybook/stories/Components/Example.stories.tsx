import { useState } from 'react'
import styled from 'styled-components'
import { COLORS, ICON_SIZE, IcProfile, TYPOS } from 'ui'
import AutoSelectInput from '../../common/AutoSelectInput'
import { Column, Row } from '../../common/Flex'
import { IconBox } from '../../common/Icon'

export const Example = () => {
    const [selectedNames, setSelectedName] = useState<string[]>([])
    const list = ['newjeong', 'yujeong', 'yullia.jeon', 'juj', 'yujeong-jeon', 'yujeongJeon']
    const onSearch = (nicknames: string[]) => {
        setSelectedName(nicknames)
    }
    return (
        <Column>
            <Text>
                {selectedNames.map((nickname) => (
                    <>
                        <IconBox size={ICON_SIZE.S}>
                            <IcProfile
                                width={ICON_SIZE.S.width}
                                height={ICON_SIZE.S.height}
                                fill={COLORS.BRAND.MAINGREEN_DEFAULT}
                            />
                        </IconBox>
                        <Span key={nickname}>{nickname}</Span>
                    </>
                ))}
            </Text>
            <AutoSelectInput list={list} onSearch={onSearch} placeholder={'내 닉네임 검색'} />
        </Column>
    )
}

const Text = styled(Row)`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    color: ${COLORS.GRAYSCALE.GRAY_9};
`

const Span = styled.span`
    margin: 0 4px;
`

export default {
    title: "Bibi's Design System/Component/Example",
    component: Example,
}
