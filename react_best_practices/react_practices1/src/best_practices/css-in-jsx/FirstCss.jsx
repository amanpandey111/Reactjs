import { useMemo, useState } from "react";
import React from "react";
import { memo } from "react";
// const style = {
//     backgroundColor:"red"
// }

const FirstCss = () => {
    const[count,setCount] = useState(0)
    const style = useMemo(()=>{
        return {
            backgroundColor:"red"
        }
    },[])
  return (
    <div>
        <h1>Let's Learn How to CSS our jsx to avoid extra Re-rendering</h1>
        <p>Count is {count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)} >increment</button>
        <button onClick={()=>setCount((prev)=>prev-1)} >decrement</button>
        <Child style={style} />
    </div>
  )
}

export default FirstCss

const Child = memo(({style}) => {
    console.log(style);
    console.log("child re-render");
    return(
        <h1 style={style} >I am The Child Component</h1>
    )
})