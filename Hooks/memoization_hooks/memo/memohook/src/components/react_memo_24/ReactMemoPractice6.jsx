import React, { useState } from 'react'

const ReactMemoPractice6 = () => {
    const[count,setCount] = useState(0)
  return (
    <div>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)} >increment</button>
        <button onClick={()=>setCount(count-1)} >decrement</button>
        <ChildMemo6 count={count} />
    </div>
  )
}

export default ReactMemoPractice6

const ChildMemo6 = React.memo(() => {
    console.log("child 6 rendered");
    return(
        <div>
            <h1>I am a child memo of 6</h1>
        </div>
    )
})