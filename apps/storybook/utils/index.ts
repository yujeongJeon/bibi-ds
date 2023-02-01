export const snakeToPascalString = (str: string) => {
    str = str.toLowerCase()
    return str[0].toUpperCase() + str.slice(1, str.length)
}

export const flattenObjectToArray = (obj: Record<string, any>): string[] =>
    Object.keys(obj).reduce((arr, key) => {
        if (typeof obj[key] === 'object') {
            const subList = flattenObjectToArray(obj[key])
            return [...arr, ...subList]
        }
        return arr.concat(obj[key])
    }, [] as string[])

export const getKeyByValue = (obj: Record<string, string>, targetValue: string) => {
    const targetEntries = Object.entries(obj).filter(([, value]) => value === targetValue)

    return targetEntries.length > 0 ? targetEntries[0][0] : undefined
}

type TNestedObject = {
    [key in string]: TNestedObject | string
}

export const flattenObject = (
    obj: TNestedObject,
    parentKey?: string,
    options?: {
        excludes: string[]
    },
): Record<string, string> =>
    Object.keys(obj).reduce((result, key) => {
        if (options?.excludes.includes(key)) {
            return result
        }
        const flattened =
            typeof obj[key] !== 'string'
                ? flattenObject(obj[key] as TNestedObject, parentKey ? `${parentKey}.${key}` : key, options)
                : {
                      [parentKey ? `${parentKey}.${key}` : key]: obj[key] as string,
                  }

        return {
            ...result,
            ...flattened,
        }
    }, {} as Record<string, string>)
