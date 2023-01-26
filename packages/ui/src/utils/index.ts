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

export const getRgbaValue = (color: TColor): TColor =>
    Object.entries(color).reduce(
        (color, [key, value]) => ({
            ...color,
            ...(key === 'a'
                ? {
                      [key]: value,
                  }
                : {
                      [key]: Math.round(value * 255),
                  }),
        }),
        {} as TColor,
    )
