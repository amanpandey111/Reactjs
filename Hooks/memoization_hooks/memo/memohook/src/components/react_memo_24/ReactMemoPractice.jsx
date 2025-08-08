import { useRef, useState } from "react"
import React from "react"

const ReactMemoPractice = ()=> {
    const[count,setCount] = useState(0)
    return(
        <div>
            <h1>Let's Practice the React.Memo Hook</h1>
            <p>Count is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <ReactMemoChild/>
        </div>
    )
}
export default ReactMemoPractice

const ReactMemoChild = React.memo(()=> {
    console.log("got re-rendered");
    const refCount = useRef(0)
    return(
        <h2>I am the child component and got rendered {refCount.current++} times.</h2>
    )
})