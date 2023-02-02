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

const BookmarkSection = styled(Column).attrs({
    alignItems: 'center',
    justifyContent: 'center',
})`
    ${TYPOS.PRETENDARD_HEAD4_BOLD}
    background: ${COLORS.BACKGROUND.PRIMARY};
    width: 320px;
    background: #f2f4f6;
    min-height: calc(100vh - 2rem);
    margin: 0 20px 0 0;
    border-radius: 4px;
    text-align: center;
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
                <BookmarkSection>
                    🚧
                    <br />
                    Bookmark Section
                </BookmarkSection>
                <IconSection>
                    <AutoSelectInput list={Object.keys(IconSet)} onSearch={onSearch} />
                    <Total>총 {numOfIcons}개의 아이콘</Total>
                    <Tip>
                        <IconBox size={ICON_SIZE.S} marginRight={3}>
                            <IcFill width={20} height={20} fill={COLORS.SUB.TEAL_DEFAULT} />
                        </IconBox>
                        아이콘을 클릭하면 컬러와 사이즈를 조절해 코드를 복사할 수 있습니다.
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
