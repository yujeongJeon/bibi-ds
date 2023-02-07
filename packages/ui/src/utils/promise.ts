export const createSettledResponse = <T extends { [key in string]: string }, K extends string = string>(
    response: PromiseSettledResult<T>[],
): Record<K, string> => {
    return response.reduce((result, res) => {
        if (res.status === 'rejected' || res.value.error || res.value.key === 'null' || !res.value.status) {
            return result
        }

        const { key, status } = res.value

        return { ...result, [key]: status }
    }, {} as Record<string, string>)
}

export type TSetResponse = {
    key: string
    status: 'OK' | 'ERROR'
}

export const settle = (fn: () => Promise<void>, key: string) =>
    fn()
        .then((): TSetResponse => ({ status: 'OK', key } as TSetResponse))
        .catch((): TSetResponse => ({ status: 'ERROR', key } as TSetResponse))
