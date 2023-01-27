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

type TTypeStyle = {
    fontFamily: string
    fontPostScriptName: string
    fontWeight: number
    fontSize: number
    textAlignHorizontal: string
    textAlignVertical: string
    letterSpacing: number
    lineHeightPx: number
}

export interface IFigmaDocument<T extends IFrame = IFrame> {
    nodes: {
        [key: string]: {
            document: T
        }
    }
}

export type TNodeType = 'TEXT' | 'VECTOR' | 'COMPONENT' | 'COMPONENT_SET' | 'FRAME'

export interface ICommon<T extends string = string> {
    id: string
    name: T
    type: TNodeType
    fills: TPaint[]
}

export interface IFrame<Name extends string = string, NameSet extends string = string> extends ICommon<Name> {
    type: 'FRAME'
    children: (ICommon | IFrame<NameSet>)[]
}

export interface IVector<Name extends string = string> extends ICommon<Name> {
    type: 'VECTOR'
}

export interface IText<Name extends string = string> extends ICommon<Name> {
    type: 'TEXT'
    style: TTypeStyle
}
