import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { COLORS, IcCancel } from 'ui'
import usePortal from '../hooks/usePortal'
import Overlay from './Overlay'
import { Button } from './Button'

export interface HalfLayerWrapperProps {
    onClose: (e: React.SyntheticEvent) => void
    showCloseButton?: boolean
    isShow: boolean
    prerender?: boolean
    onDestroyed?: () => void
    overlayOpacity?: number
    keepPreviousScrollPosition?: boolean
    id?: string
}

export const HALF_TYPE = {
    ROUND: 'round',
    FILTER: 'type_filter',
    DARK: 'dark-type',
    MESSAGE: 'message-type',
    NOTFULL: 'notfull-type',
    NO_BACKGROUND: 'no-background',
    LIMIT_WIDTH: 'limit-width',
    LIMIT_WIDTH_BIG: 'limit-width-big',
} as const

const TRANSITION = {
    ENTER: 'enter',
    LEAVE: 'leave',
} as const

type TTransitionAction = (typeof TRANSITION)[keyof typeof TRANSITION]

const getDataAttr = (element: HTMLElement, attributeName: string) => element.dataset[attributeName]

const CloseButton = ({ onClose }: Pick<HalfLayerWrapperProps, 'onClose'>) => (
    <ButtonWrapper type="button" onClick={onClose}>
        <IcCancel width={24} height={24} fill={COLORS.GRAYSCALE.GRAY_10} />
    </ButtonWrapper>
)

const ButtonWrapper = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 18px;
    svg {
        display: block;
        margin: 1px 0 0;
    }
`

export default function Modal({
    children = null,
    onClose,
    showCloseButton,
    isShow,
    prerender,
    onDestroyed,
    overlayOpacity = 0.5,
    keepPreviousScrollPosition,
    id,
}: React.PropsWithChildren<HalfLayerWrapperProps>) {
    const LayerID = `HalfLayerWrapper_position_${id}`
    const { Portal } = usePortal()
    const [isRunning, setIsRunning] = useState(false)
    const [direction, setDirection] = useState<TTransitionAction>(TRANSITION.LEAVE)
    const ref = useRef<HTMLDivElement | null>(null)
    const isCenterLayer = typeof window !== 'undefined' ? window.innerWidth >= 2000 : false

    const handleHalfLayerWrapperHide = useCallback(() => {
        onDestroyed?.()
        setIsRunning(false)
    }, [onDestroyed])

    const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = (e) => {
        if (!isCenterLayer && getDataAttr(e.currentTarget, 'direction') === TRANSITION.LEAVE) {
            handleHalfLayerWrapperHide()
        }
    }

    useEffect(() => {
        if (!isShow && isCenterLayer && isRunning && direction === TRANSITION.LEAVE) {
            handleHalfLayerWrapperHide()
        }
    }, [direction, handleHalfLayerWrapperHide, isCenterLayer, isRunning, isShow])

    useEffect(() => {
        if (isShow) {
            setIsRunning(true)
            requestAnimationFrame(() => setDirection(TRANSITION.ENTER))
        } else {
            requestAnimationFrame(() => setDirection(TRANSITION.LEAVE))
        }
    }, [isShow])

    useEffect(() => {
        if (isShow) {
            window.requestAnimationFrame(() => {
                if (ref.current && keepPreviousScrollPosition) {
                    const sessionStorageValue = sessionStorage.getItem(LayerID)
                    if (sessionStorageValue) {
                        try {
                            ref.current?.scrollTo(0, Number(sessionStorageValue))
                        } catch {
                            // NOTHING TO DO
                        }
                    }
                }
            })
        } else {
            if (keepPreviousScrollPosition) {
                if (process.env.NODE_ENV !== 'production' && !id) {
                    // eslint-disable-next-line no-console
                    console.warn(
                        '각 HalfLayerWrapper의 스크롤 포지션을 정확히 유지하기 위해서는 유니크한 id props를 넘겨주어야 합니다.',
                    )
                }
                const pos = ref.current?.scrollTop
                if (pos !== undefined) {
                    sessionStorage.setItem(LayerID, `${pos}`)
                }
            }
        }
    }, [isShow, LayerID, keepPreviousScrollPosition, id])

    return (
        <Portal>
            {(isRunning || prerender) && (
                <Container shouldHide={!!prerender && !isShow} noAnimation={!!prerender && !isShow}>
                    <Wrapper>
                        <Inner
                            ref={ref}
                            direction={direction}
                            data-direction={direction}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {children}
                            {showCloseButton && <CloseButton onClose={onClose} />}
                        </Inner>
                    </Wrapper>
                    <Overlay
                        isShow={isShow}
                        onClick={onClose}
                        opacity={overlayOpacity}
                        duration={isCenterLayer ? 0 : 200}
                    />
                </Container>
            )}
        </Portal>
    )
}

const Container = styled.div<{
    shouldHide: boolean
    noAnimation: boolean
}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    ${({ shouldHide }) =>
        shouldHide &&
        css`
            transition-delay: 0.3s;
            transform: translateY(-100px);
        `}
    ${({ noAnimation }) =>
        noAnimation &&
        css`
            display: none;
        `}
`

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 16px;
    overflow: hidden;
    width: 700px;
    height: 350px;
    margin: 0 auto;
`

const Inner = styled.div<{
    direction?: TTransitionAction
}>`
    position: static;
    border-radius: 0;
    margin: 0;
    z-index: 10;
    background-color: #fff;
    box-sizing: border-box;
    letter-spacing: -0.5px;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    transition: all 0.3s cubic-bezier(0.33, 0, 0.2, 1);
    height: 100%;
    width: 100%;

    @supports (padding-bottom: constant(safe-area-inset-bottom)) {
        padding-bottom: constant(safe-area-inset-bottom);
    }
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
        padding-bottom: env(safe-area-inset-bottom);
    }
    ${({ direction }) => {
        switch (direction) {
            case 'enter':
                return css`
                    transform: translate3d(0, 0%, 0);
                    opacity: 1;
                `
            case 'leave':
                return css`
                    transform: translate3d(0, -100px, 0);
                    opacity: 0;
                `
            default:
                return null
        }
    }}
`
