import { useEffect, useState } from "react"

const useDebounce = (text: string) => {
  const [inputText, setInputText] = useState(text);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setInputText(text)
    }, 600)
    return () => clearTimeout(timeId)
  }, [text])
  return { inputText }
}

export default useDebounce;
