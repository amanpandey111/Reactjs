import { useState,useEffect } from "react"

const Counter = () => {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Component Mounted");
    },[count])
  return (
    <section style={{textAlign:"center"}}>
        <h1>Count : {count} </h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </section>
  )
}

export default Counter