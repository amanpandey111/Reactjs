import { useState } from "react"

const useClipBoard = () => {
    const [copied, setCopied] = useState(false)
    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        }, 2000)
    }
    return { copied, copy };
}

export default useClipBoard;
