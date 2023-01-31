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
