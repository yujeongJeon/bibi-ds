import fs from 'fs'

export const writeFile = (content: string, { name, path }: { name: string; path: string }) => {
    const filePath = `${path}/${name}`
    fs.writeFileSync(filePath, content, {
        encoding: 'utf-8',
    })
}
