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

export type TFigmaDocument = {
    nodes: {
        [key: string]: {
            document: IFrame
        }
    }
}

export interface ICommon {
    id: string
    name: string
    type: 'TEXT' | 'VECTOR' | 'COMPONENT' | 'COMPONENT_SET' | 'FRAME'
    fills: TPaint[]
}

export interface IFrame extends ICommon {
    type: 'FRAME'
    children: TFrameChildren[]
}

export interface IVector extends ICommon {
    type: 'VECTOR'
}

export interface IText extends ICommon {
    type: 'TEXT'
    style: TTypeStyle
}

export type TFrameChildren = ICommon
