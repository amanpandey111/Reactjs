import { useRef, useState } from "react"
import React from "react"

const ReactMemoPractice4 = ()=> {
    const[count,setCount] = useState(0)
    const handleIncrement = ()=> {
        setCount((prev)=>prev+1)
    }
    const handleChildFunc = () => {
        console.log("Function called");
    }

    return(
        <>
          <h4>Let's Practice the React.memo where we will pass function(without useCallback) as a argument : Leads to re-render</h4>
          <p>Parent Count is : {count}</p>
          <button onClick={handleIncrement}>increment</button>
          <ChildMemo4 handleChildFunc={handleChildFunc} />
        </>
    )
}
export default ReactMemoPractice4

const ChildMemo4 = React.memo(({handleChildFunc})=> {
    const refCount = useRef(0)
    console.log("got re-rendered");
    return(
        <>
          <h3>I got rendered {refCount.current++} times</h3>
          <button onClick={handleChildFunc} >click me</button>
        </>
    )
})