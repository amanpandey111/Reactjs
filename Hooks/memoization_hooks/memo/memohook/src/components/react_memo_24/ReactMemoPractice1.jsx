//! Here In this example of React.memo() we are passing prop  to memo component so whenever the prop changes the child we re-render

import { useRef, useState } from "react"
import React from "react"
import { memo } from "react"

const ReactMemoPractice1 = ()=> {
    const[count,setCount] = useState(0)
    return(
        <div>
            <h1>Let's Practice the React.Memo Hook</h1>
            <p>Count is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <ReactMemoChild1 count={count} />
        </div>
    )
}
export default ReactMemoPractice1

const ReactMemoChild1 = memo(({count})=> {
    console.log("I got rendered as prop changes");
    const refCount = useRef(0)
    return(
        <> 
          <h1>I am child component and redered {refCount.current++} time and count of parent is {count}</h1>
        </>
    )
})