import { useState } from 'react'
import styled from 'styled-components'
import { COLORS, ICON_SIZE, IcProfile, TYPOS } from 'ui'
import { Column, Row } from '../common/Flex'
import { IconBox } from '../common/Icon'
import { Button } from '../common/Button'
import useToggle from '../hooks/useToggle'
import Modal from '../common/Modal'
import AutoSelectInput from '../common/AutoSelectInput'

const Example = () => {
    const [selectedNames, setSelectedName] = useState<string[]>([])
    const list = ['newjeong', 'yujeong', 'yullia.jeon', 'juj', 'yujeong-jeon', 'yujeongJeon']
    const onSearch = (nicknames: string[]) => {
        setSelectedName(nicknames)
    }
    const { isOpen, open, close } = useToggle()
    return (
        <Column>
            <AutoSelectInput list={list} onSearch={onSearch} placeholder={'search person'} data-testid="auto-input" />
            <Container justifyContent={'flex-end'}>
                <CustomButton onClick={open}>Fire Click Event</CustomButton>
            </Container>
            <Modal isShow={isOpen} onClose={close} showCloseButton>
                <ModalContent>
                    <Title id="modal-title">Search Results</Title>
                    <Text>
                        {selectedNames.map((nickname) => (
                            <ProfileContainer key={`modal-item-${nickname}`} id={`modal-item-${nickname}`}>
                                <IconBox size={ICON_SIZE.S}>
                                    <IcProfile
                                        width={ICON_SIZE.S.width}
                                        height={ICON_SIZE.S.height}
                                        fill={COLORS.BRAND.MAINGREEN_DEFAULT}
                                    />
                                </IconBox>
                                <Span key={nickname}>{nickname}</Span>
                            </ProfileContainer>
                        ))}
                    </Text>
                </ModalContent>
            </Modal>
        </Column>
    )
}

const Container = styled(Row)`
    width: 100%;
    margin-top: 12px;
`

const ModalContent = styled(Column)`
    padding: 45px 20px 20px 20px;
`

const Title = styled(Row).attrs({
    justifyContent: 'flex-start',
})`
    ${TYPOS.PRETENDARD_HEAD2_BOLD}
    width: 100%;
    color: ${COLORS.GRAYSCALE.GRAY_9};
`

const ProfileContainer = styled(Row).attrs({
    justifyContent: 'flex-start',
})`
    ${TYPOS.PRETENDARD_BODY2_MEDIUM}
    width: 100%;
    margin: 6px 0;
    &:hover {
        ${TYPOS.PRETENDARD_BODY2_BOLD}
        background-color: ${COLORS.BRAND.MAINYELLOW_LIGHT};
    }
`

const CustomButton = styled(Button)`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    color: #fff;
    padding: 8px 14px;
    background-color: ${COLORS.GRAYSCALE.GRAY_6};
    border-radius: 20px;
    transition: all 0.2s linear;
    &:hover,
    &:active {
        background-color: ${COLORS.GRAYSCALE.GRAY_8};
    }
`

const Text = styled(Column)`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    color: ${COLORS.GRAYSCALE.GRAY_9};
    width: 100%;
`

const Span = styled.span`
    margin: 0 4px;
`

export default Example
