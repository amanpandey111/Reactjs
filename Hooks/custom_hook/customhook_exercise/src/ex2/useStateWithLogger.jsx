import { useEffect, useRef, useState } from "react"

const useStateWithLogger = (v) => {
    const[count,setCount] = useState(v)
    const previus = useRef(count)

    useEffect(()=>{
        console.log(`state changes from ${previus.current} to ${count}`);
        previus.current=count
    },[count])

    return[count,setCount,previus]
}

export default useStateWithLogger