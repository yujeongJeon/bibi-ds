// https://www.figma.com/developers/api#node-types

export type TFigmaFrame = {
    nodes: {
        [key: string]: {
            document: {
                id: string
                name: string
                type: 'FRAME'
                children: TFrameChildren[]
            }
        }
    }
}

type TColor = {
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

export type TCommonFrameChildren = {
    name: string
    type: 'TEXT' | 'VECTOR' | 'COMPONENT' | 'COMPONENT_SET'
    fills: TPaint[]
}

export type TVector = TCommonFrameChildren & {
    type: 'VECTOR'
}
export type TText = TCommonFrameChildren & {
    type: 'TEXT'
    style: TTypeStyle
}

export type TFrameChildren = TVector | TText
