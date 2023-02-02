import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

export const BACKGROUND_COLOR = {
    BLACK: 'bg-black',
    WHITE: 'bg-white',
} as const

type TBackgroundColor = (typeof BACKGROUND_COLOR)[keyof typeof BACKGROUND_COLOR]

/**
 * @description 레이어 등 화면을 가리는 컴포넌트를 표시할 때 함께 표시되는 반투명한 뒷 배경
 * @typedef shouldShow
 * @typedef onClick 클릭하면 호출할 함수
 * @typedef preventBackgroundScroll  배경 스크롤을 잠글 것인지 여부, 기본값은 true
 * @typedef opacity 불투명도(0~1), 기본값은 0.5
 * @typedef duration
 * @typedef backgroundColor 배경색 (흰색, 검은색), 기본값은 검은색
 * @typedef zIndex overlay의 z-index 값
 * */
export interface OverlayProps {
    isShow: boolean
    onClick?: (e: React.SyntheticEvent) => void
    opacity?: React.CSSProperties['opacity']
    duration?: number
    backgroundColor?: TBackgroundColor
    zIndex?: React.CSSProperties['zIndex']
}

const TRANSITION = {
    ENTER: 'enter',
    LEAVE: 'leave',
} as const

type TTransitionAction = (typeof TRANSITION)[keyof typeof TRANSITION]

const getDataAttr = (element: HTMLElement, attributeName: string) => element.dataset[attributeName]

const DimmedArea = styled.div<{
    backgroundColor: TBackgroundColor
    direction?: TTransitionAction
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
    ${({ direction }) =>
        direction === TRANSITION.LEAVE
            ? css`
                  opacity: 0 !important;
              `
            : null}

    background-color: ${({ backgroundColor }) => (backgroundColor === BACKGROUND_COLOR.BLACK ? '#000' : '#fff')};
`

function Overlay({
    isShow,
    onClick,
    opacity = 0.5,
    duration = 0,
    backgroundColor = BACKGROUND_COLOR.BLACK,
    zIndex,
}: OverlayProps) {
    const [isRunning, setIsRunning] = useState(false)
    const [direction, setDirection] = useState<TTransitionAction>(TRANSITION.LEAVE)

    const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = (e) => {
        if (getDataAttr(e.currentTarget, 'direction') === TRANSITION.LEAVE) {
            setIsRunning(false)
        }
    }

    const isTransition = duration > 0

    useEffect(() => {
        if (isShow) {
            setIsRunning(true)
            requestAnimationFrame(() => setDirection(TRANSITION.ENTER))
        } else {
            requestAnimationFrame(() => setDirection(TRANSITION.LEAVE))
        }
    }, [isShow])

    if (isTransition) {
        return isRunning ? (
            <DimmedArea
                backgroundColor={backgroundColor}
                direction={direction}
                onTransitionEnd={handleTransitionEnd}
                onClick={onClick}
                style={{ opacity, zIndex }}
            />
        ) : null
    }

    return isShow ? (
        <DimmedArea style={{ opacity, zIndex }} backgroundColor={backgroundColor} onClick={onClick} />
    ) : null
}

export default Overlay
