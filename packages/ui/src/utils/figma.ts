import { ICommon, IComponent, IFrame, IGroup, TNodeType } from '../types/figma'

function isNode<T extends ICommon>(child: ICommon, nodeName: TNodeType): child is T {
    return child.type === nodeName
}

export const isFrame = <T extends IFrame>(child: ICommon): child is T => isNode<T>(child, 'FRAME')

export const isGroup = <T extends IGroup>(child: ICommon): child is T => isNode<T>(child, 'GROUP')

export const isComponent = <T extends IComponent>(child: ICommon): child is T => isNode<T>(child, 'COMPONENT')
