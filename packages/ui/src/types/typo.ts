import { IFigmaDocument, IFrame } from './figma'

type TFontFamily = 'Pretendard'
type TFontUsageType = 'Display' | 'Head1' | 'Head2' | 'Head3' | 'Head4' | 'Body1' | 'Body2' | 'Caption'
type TFontWeight = 'Bold' | 'Medium'

export type TPossibleTypoName = `${TFontFamily}/${TFontUsageType}/${TFontWeight}`

export type TUsageFrame = IFrame<'Usage', TPossibleTypoName>

export type TTypoFrame = IFrame<TPossibleTypoName>

export type TTypoFigmaDocument = IFigmaDocument<IFrame<'Font', 'Usage', TPossibleTypoName>>
