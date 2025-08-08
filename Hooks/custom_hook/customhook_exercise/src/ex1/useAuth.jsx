import { useEffect, useState } from "react"

const useAuth = () => {
    const[str,setStr] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{setStr(true)},3000)
        // let t = setInterval(()=>{
        //     setStr(true)
        // },2000)
        // return ()=>clearInterval(t)
    },[])
    return {str}
}

export default useAuth