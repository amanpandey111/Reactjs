import { useEffect, useState } from "react"

const Section = ({count}) => {
    const[timer,setTimer] = useState(0)
    useEffect(()=>{
        console.log("Section has re-rendered");
    },[count])
    useEffect(()=>{
        setInterval(()=>{
            setTimer((prev)=>prev+1)
        },1000)
    },[])
  return (
    <h2>Time on page: {timer} seconds</h2>
  )
}

export default Section