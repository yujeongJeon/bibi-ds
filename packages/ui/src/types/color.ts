import { IFigmaDocument, IFrame } from './figma'

export type TColorSetName = 'Grayscale' | 'Sub' | 'Brand' | 'Background' | 'Border'

export interface IColorSetFrame extends IFrame<TColorSetName> {}

export type TColorFigmaDocument = IFigmaDocument<IFrame<'Color', TColorSetName>>

export type TColorReturnType = Record<Uppercase<TColorSetName>, Record<string, string>>
