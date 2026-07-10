import { useEffect, useState } from "react";

const useDebounce = (value: string, delay=500) => {
  const [debounceValue, setDebounceValue] = useState(value)
  console.log(debounceValue)
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounceValue;
}

export default useDebounce;
