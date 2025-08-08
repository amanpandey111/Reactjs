import { useState } from "react"
import useStateWithLogger from "./useStateWithLogger"

const Home2 = () => {
    const[count,setCount,previus] = useStateWithLogger(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}} >Go Up</button>
      <button onClick={()=>setCount(count-1)}>Go Down</button>
    </>
  )
}

export default Home2