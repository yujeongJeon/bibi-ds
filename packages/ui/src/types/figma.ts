// https://www.figma.com/developers/api#node-types

export type TColor = {
    r: number
    g: number
    b: number
    a: number
}

type TPaint = {
    type:
        | 'SOLID'
        | 'GRADIENT_LINEAR'
        | 'GRADIENT_RADIAL'
        | 'GRADIENT_ANGULAR'
        | 'GRADIENT_DIAMOND'
        | 'IMAGE'
        | 'EMOJI'
        | 'VIDEO'
    color: TColor
}

export type TTypeStyle = {
    fontFamily: string
    fontPostScriptName: string
    fontWeight: number
    fontSize: number
    textAlignHorizontal: string
    textAlignVertical: string
    letterSpacing: number
    lineHeightPx: number
}

export type TRectangle = {
    x: number
    y: number
    width: number
    height: number
}

export interface IFigmaDocument<T extends IFrame = IFrame> {
    nodes: {
        [key: string]: {
            document: T
        }
    }
}

export type TNodeType = 'TEXT' | 'VECTOR' | 'COMPONENT' | 'COMPONENT_SET' | 'FRAME' | 'GROUP'

export interface ICommon<T extends string = string> {
    id: string
    name: T
    type: TNodeType
    fills: TPaint[]
    absoluteBoundingBox: TRectangle
    absoluteRenderBounds: TRectangle
}

type TFrameOrGroup<Name extends string, SubName extends string> = IFrame<Name, SubName> | IGroup<Name, SubName>

export interface IFrame<
    Name extends string = string,
    NameSet extends string = string,
    Nested extends string = string,
    NodeType = TFrameOrGroup<NameSet, Nested>,
> extends ICommon<Name> {
    type: 'FRAME'
    children: (ICommon | NodeType)[]
}

export interface IVector<Name extends string = string> extends ICommon<Name> {
    type: 'VECTOR'
}

export interface IText<Name extends string = string> extends ICommon<Name> {
    type: 'TEXT'
    style: TTypeStyle
}

export interface IGroup<Name extends string = string, NameSet extends string = string> extends ICommon<Name> {
    type: 'GROUP'
    children: (ICommon | IGroup<NameSet>)[]
}

export interface IComponent extends ICommon {
    type: 'COMPONENT'
    children: ICommon[]
}
