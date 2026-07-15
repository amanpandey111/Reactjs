import { useEffect, useRef, useState, type RefObject } from "react"

const useThrottle = (targetRef: RefObject<HTMLDivElement | null>) => {
  const [curPosition, setCurPosition] = useState(0)
  const isThrottle = useRef(false)
  const timOutId = useRef<null | number>(null)
  console.log(curPosition)

  useEffect(() => {
    const target = targetRef?.current || window;
    const handleScroll = () => {
      if(isThrottle.current) return
      setCurPosition((prev) => prev+1)
      isThrottle.current = true;
      timOutId.current = setTimeout(() => {
        isThrottle.current = false
        timOutId.current = null
      }, 500)
    }
    target.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if(timOutId.current) {
        clearTimeout(timOutId.current)
      }
    }
  }, [targetRef])

  return { curPosition }
}

export default useThrottle;
