import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
    COLORS,
    IcAdd,
    IcAlarm,
    IcApple,
    IcBack,
    IcBackArrow,
    IcBookmark,
    IcCalendar,
    IcCamera,
    IcCancel,
    IcChat,
    IcCheck,
    IcCheckBox,
    IcComment,
    IcCommunity,
    IcDocument,
    IcDown,
    IcDownload,
    IcEyeOff,
    IcEyeOn,
    IcFill,
    IcFilter,
    IcHeart,
    IcHome,
    IcKakao,
    IcLocation,
    IcLockFill,
    IcMap,
    IcMenu,
    IcNew,
    IcNext,
    IcOn,
    ICON_SIZE,
    IcOption,
    IcPencil,
    IcProfile,
    IcQuestion,
    IcRecommend,
    IcReComment,
    IcRemove,
    IcReset,
    IcSearch,
    IcSend,
    IcSetting,
    IcShare,
    IcShield,
    IcSiren,
    IcThumbUp,
    IcThumbUpFill,
    IcTransfer,
    IcTrash,
    IcUp,
    IcUserSquare,
    IcWarning,
    TYPOS,
} from 'ui'
import AutoSelectInput from '../../common/AutoSelectInput'
import { Column, Flex, Row } from '../../common/Flex'
import { IconBox } from '../../common/Icon'
import IconController from '../../common/IconController'
import Modal from '../../common/Modal'
import useToggle from '../../hooks/useToggle'
import { TSvgReactNode } from '../../types/svg'

const IconSet = {
    IcAdd: IcAdd,
    IcAlarm: IcAlarm,
    IcApple: IcApple,
    IcBack: IcBack,
    IcBackArrow: IcBackArrow,
    IcBookmark: IcBookmark,
    IcCalendar: IcCalendar,
    IcCamera: IcCamera,
    IcCancel: IcCancel,
    IcChat: IcChat,
    IcCheck: IcCheck,
    IcCheckBox: IcCheckBox,
    IcComment: IcComment,
    IcCommunity: IcCommunity,
    IcDocument: IcDocument,
    IcDown: IcDown,
    IcDownload: IcDownload,
    IcEyeOff: IcEyeOff,
    IcEyeOn: IcEyeOn,
    IcFill: IcFill,
    IcFilter: IcFilter,
    IcHeart: IcHeart,
    IcHome: IcHome,
    IcKakao: IcKakao,
    IcLocation: IcLocation,
    IcLockFill: IcLockFill,
    IcMap: IcMap,
    IcMenu: IcMenu,
    IcNew: IcNew,
    IcNext: IcNext,
    IcOn: IcOn,
    IcOption: IcOption,
    IcPencil: IcPencil,
    IcProfile: IcProfile,
    IcQuestion: IcQuestion,
    IcRecommend: IcRecommend,
    IcReComment: IcReComment,
    IcRemove: IcRemove,
    IcReset: IcReset,
    IcSearch: IcSearch,
    IcSend: IcSend,
    IcSetting: IcSetting,
    IcShare: IcShare,
    IcShield: IcShield,
    IcSiren: IcSiren,
    IcThumbUp: IcThumbUp,
    IcThumbUpFill: IcThumbUpFill,
    IcTransfer: IcTransfer,
    IcTrash: IcTrash,
    IcUp: IcUp,
    IcUserSquare: IcUserSquare,
    IcWarning: IcWarning,
}

const Container = styled(Row).attrs({
    justifyContent: 'flex-start',
})`
    width: 100%;
    gap: 6px;
    flex-wrap: wrap;
`

const Rectangle = styled(Flex)`
    width: 80px;
    height: 80px;
    background-color: ${COLORS.BACKGROUND.SECONDARY};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
        background-color: ${COLORS.GRAYSCALE.GRAY_1};
    }
`

const Total = styled(Row).attrs({
    justifyContent: 'flex-start',
    alignItems: 'center',
})`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    width: 100%;
    margin: 20px 0;
    color: ${COLORS.GRAYSCALE.GRAY_4};
`

const IconSection = styled(Column)`
    width: 100%;
`

const Tip = styled(Row)`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    color: ${COLORS.SUB.TEAL_DEFAULT};
    margin-bottom: 20px;
`

export const Icon = () => {
    const [searchIcons, setSearchIcons] = useState<Record<string, boolean>>({} as Record<string, boolean>)
    const [numOfIcons, setNumOfIcons] = useState(0)
    const [targetIcon, setTargetIcon] = useState<{
        name: string
        icon: TSvgReactNode | null
    }>({ name: '', icon: null })

    const { isOpen, open, close } = useToggle()

    const onSearch = useCallback((result: string[]) => {
        const nextSeachIcons = {} as Record<string, boolean>
        result.forEach((iconName) => {
            nextSeachIcons[iconName] = true
        }, [])

        setSearchIcons(nextSeachIcons)
    }, [])

    const commonProps = {
        width: 24,
        height: 24,
        fill: COLORS.GRAYSCALE.GRAY_10,
    }

    useEffect(() => {
        setNumOfIcons(Object.keys(searchIcons).length)
    }, [searchIcons])

    return (
        <>
            <Row alignItems={'flex-start'}>
                <IconSection>
                    <AutoSelectInput
                        list={Object.keys(IconSet)}
                        onSearch={onSearch}
                        placeholder={'????????? ???????????? ??????'}
                    />
                    <Total>??? {numOfIcons}?????? ?????????</Total>
                    <Tip>
                        <IconBox size={ICON_SIZE.S} marginRight={3}>
                            <IcFill width={20} height={20} fill={COLORS.SUB.TEAL_DEFAULT} />
                        </IconBox>
                        ???????????? ???????????? ????????? ???????????? ????????? ????????? ????????? ??? ????????????.
                    </Tip>
                    <Container>
                        {Object.entries(IconSet).map(([iconName, Icon]) =>
                            searchIcons[iconName] ? (
                                <Rectangle
                                    key={iconName}
                                    onClick={() => {
                                        open()
                                        setTargetIcon({
                                            name: iconName,
                                            icon: IconSet[iconName as keyof typeof IconSet],
                                        })
                                    }}
                                >
                                    <Icon {...commonProps} />
                                </Rectangle>
                            ) : null,
                        )}
                    </Container>
                </IconSection>
            </Row>
            <Modal isShow={isOpen} onClose={close} showCloseButton>
                {targetIcon.icon && <IconController targetIcon={targetIcon.icon} name={targetIcon.name} />}
            </Modal>
        </>
    )
}

export default {
    title: "Bibi's Design System/Foundation/Icon",
    component: Icon,
}
