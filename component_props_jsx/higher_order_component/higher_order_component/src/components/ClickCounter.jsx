import { useState } from "react"

const ClickCounter = () => {
    const[count,setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount((prev)=>prev+1)}>click me</button>
            <h1>Count is : {count}</h1>
        </div>
    )
}
export default ClickCounter