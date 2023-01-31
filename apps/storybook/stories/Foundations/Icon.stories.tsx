import { useEffect, useState } from 'react'
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
    IcSymbol,
    IcThumbUp,
    IcThumbUpFill,
    IcTransfer,
    IcTrash,
    IcUp,
    IcUserSquare,
    IcWarning,
    TYPOS,
} from 'ui'
import { Column, Flex, Row } from '../../common/Component'
import { flattenObjectToArray } from '../../utils'

const Container = styled(Row).attrs({
    justifyContent: 'flex-start',
})`
    gap: 6px;
    flex-wrap: wrap;
`

const Rectangle = styled(Flex)`
    width: 80px;
    height: 80px;
    background-color: ${COLORS.BACKGROUND.SECONDARY};
    border-radius: 4px;
`

const Total = styled(Row).attrs({
    justifyContent: 'flex-start',
    alignItems: 'center',
})`
    ${TYPOS.PRETENDARD_BODY1_MEDIUM}
    width: 100%;
    margin-bottom: 20px;
    color: ${COLORS.GRAYSCALE.GRAY_4};
`

export const Icon = ({ fill }: { fill: string }) => {
    const commonProps = {
        width: 24,
        height: 24,
        fill,
    }
    const [numOfIcons, setNumOfIcons] = useState(0)

    useEffect(() => {
        setNumOfIcons(Array.from(document.querySelectorAll('.icon')).length)
    }, [])
    return (
        <Column>
            <Total>총 {numOfIcons}개의 아이콘</Total>
            <Container>
                <Rectangle className="icon">
                    <IcAdd {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcAlarm {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcApple {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcBack {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcBackArrow {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcBookmark {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCalendar {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCamera {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCancel {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcChat {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCheck {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCheckBox {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcComment {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcCommunity {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcDocument {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcDown {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcDownload {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcEyeOff {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcEyeOn {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcFill {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcFilter {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcHeart {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcHome {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcKakao {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcLocation {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcLockFill {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcMap {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcMenu {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcNew {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcNext {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcOn {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcOption {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcPencil {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcProfile {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcQuestion {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcReComment {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcRecommend {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcRemove {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcReset {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcSearch {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcSend {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcSetting {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcShare {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcShield {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcSiren {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcSymbol {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcThumbUp {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcThumbUpFill {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcTransfer {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcTrash {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcUp {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcUserSquare {...commonProps} />
                </Rectangle>
                <Rectangle className="icon">
                    <IcWarning {...commonProps} />
                </Rectangle>
            </Container>
        </Column>
    )
}

export default {
    title: "Bibi's Design System/Foundation/Icon",
    component: Icon,
    argTypes: {
        fill: {
            control: { type: 'select' },
            options: flattenObjectToArray(COLORS),
            defaultValue: COLORS.GRAYSCALE.GRAY_10,
        },
    },
}
