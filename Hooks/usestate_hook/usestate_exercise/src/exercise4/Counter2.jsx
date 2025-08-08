import { useState } from "react"

const Counter2 = () => {
    const[count,setCount] = useState(0)
  return (
    <section>
        <h1>Count is {count} </h1>
        <button onClick={()=>{setCount((prev)=>prev+1);setCount((prev)=>prev+1);console.log(count+2)}}>+</button>
    </section>
  )
}

export default Counter2