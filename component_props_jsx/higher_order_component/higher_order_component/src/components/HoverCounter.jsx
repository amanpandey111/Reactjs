import { useState } from "react"

const HoverCounter = () => {
    const[count,setCount] = useState(0)
    return(
        <div>
            <button onMouseOver={()=>setCount((prev)=>prev+1)}>Hover me</button>
            <h1>Count is : {count}</h1>
        </div>
    )
}
export default HoverCounter