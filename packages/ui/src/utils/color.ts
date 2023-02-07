import { camelToSnakeCase } from '.'
import { IFrame, TColor } from '../types/figma'
import { isVector } from './figma'

export const normalizeToHex = (colorNumber: number) => Math.round(colorNumber * 255)

export const percentageToHex = (percentage: number) => normalizeToHex(percentage).toString(16).padStart(2, '0')

export const percentageToRgba = (color: TColor): TColor =>
    Object.entries(color).reduce(
        (color, [key, value]) => ({
            ...color,
            ...(key === 'a'
                ? {
                      [key]: value,
                  }
                : {
                      [key]: normalizeToHex(value),
                  }),
        }),
        {} as TColor,
    )

export const rgbaToHex = (color: TColor) => {
    const r = percentageToHex(color.r)
    const g = percentageToHex(color.g)
    const b = percentageToHex(color.b)

    return `#${r}${g}${b}`
}

export const parseColor = (children: IFrame[], rootName: string) =>
    children
        .map(({ name, children }) => ({
            name: camelToSnakeCase(name, {
                exclude: rootName,
            }).toUpperCase(),
            colors: children.filter(isVector)[0].fills[0].color, // VECTOR 객체의 fills 속성을 추출
        }))
        .reduce(
            (colorSet, { name, colors }) => ({
                ...colorSet,
                [name]: rgbaToHex(colors), // rgba -> hex로 변환
            }),
            {},
        )
