import { useRef, useState } from "react"
import React from 'react'
const ReactMemoPractice3 = ()=> {
    const[count,setCount] = useState(0)
    const handleClick = ()=> {

    }
    return(
        <div>
            <h1>Let's Practice the React.Memo Hook where we will pass function and it will cause to re-render</h1>
            <p>Count is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <ReactMemoChild3 obj={{name:"ReactMemoPractice2"}} />
        </div>
    )
}
export default ReactMemoPractice3

const ReactMemoChild3 = React.memo(({obj})=> {
    const refCount = useRef(0)
    return(
        <>
          <h3>I am the child component and got rendered {refCount.current++} counts and named with {obj.name}</h3>
        </>
    )
})