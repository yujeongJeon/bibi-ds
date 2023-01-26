import { TColor } from '../types/figma'

export const camelToSnakeCase = (str: string) =>
    str.includes('_')
        ? str.toUpperCase()
        : str
              .replace(/[A-Z]/g, (c) => {
                  return '_' + c.toLowerCase()
              })
              .slice(1)
              .toUpperCase()

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
