import { useRef, useState } from "react"
import React from 'react'
const ReactMemoPractice2 = ()=> {
    const[count,setCount] = useState(0)
    return(
        <div>
            <h1>Let's Practice the React.Memo Hook</h1>
            <p>Count is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <ReactMemoChild2 obj={{name:"ReactMemoPractice2"}} />
        </div>
    )
}
export default ReactMemoPractice2

const ReactMemoChild2 = React.memo(({obj})=> {
    const refCount = useRef(0)
    return(
        <>
          <h3>I am the child component and got rendered {refCount.current++} counts and named with {obj.name}</h3>
        </>
    )
})