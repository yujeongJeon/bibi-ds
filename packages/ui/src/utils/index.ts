const deleteExcludeWord = (str: string, excludeStr?: string) => {
    if (!excludeStr) return str
    const index = str.toUpperCase().indexOf(excludeStr.toUpperCase())
    return index >= 0 ? removeFirstUnderline(str.replace(excludeStr, '')) : str
}

const removeFirstUnderline = (str: string) => (str[0] === '_' ? str.slice(1) : str)

export const camelToSnakeCase = (
    str: string,
    opts?: {
        exclude: string
    },
) =>
    str.includes('_')
        ? deleteExcludeWord(str, opts?.exclude).toUpperCase()
        : deleteExcludeWord(str, opts?.exclude)
              .replace(/[A-Z]/g, (c) => {
                  return '_' + c.toLowerCase()
              })
              .slice(1)
              .toUpperCase()
