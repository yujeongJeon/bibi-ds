export const camelToSnakeCase = (str: string) =>
    str.includes('_')
        ? str.toUpperCase()
        : str
              .replace(/[A-Z]/g, (c) => {
                  return '_' + c.toLowerCase()
              })
              .slice(1)
              .toUpperCase()
