import { useCallback, useState, useEffect } from 'react'

type TCopyArgs = {
    text: {
        before: string
        after?: string
    }
    block?: {
        duration: number // ms
    }
}

enum CopyStatus {
    Clean,
    Pending,
}

const useCopy = ({ text, block = { duration: 3000 } }: TCopyArgs) => {
    const [copyText, setCopyText] = useState(text.before)
    const [status, setStatus] = useState(CopyStatus.Clean)

    const copy = useCallback((value: string) => {
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.style.top = '0'
        textarea.style.left = '0'
        textarea.style.position = 'fixed'

        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

        const { after } = text

        after && setCopyText(after)
        setStatus(CopyStatus.Pending)
    }, [])

    useEffect(() => {
        if (status === CopyStatus.Pending) {
            setTimeout(() => {
                setCopyText(text.before)
                setStatus(CopyStatus.Clean)
            }, block.duration)
        }
    }, [status])

    return {
        copy: useCallback(
            (value: string) => {
                if (status === CopyStatus.Pending) {
                    return
                }
                copy(value)
            },
            [copy, status],
        ),
        copyText,
        isCopied: status === CopyStatus.Pending,
    }
}

export default useCopy
