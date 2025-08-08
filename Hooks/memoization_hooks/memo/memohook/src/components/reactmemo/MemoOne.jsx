import React, { useState } from 'react'
import MemoTwo from './MemoTwo'

const MemoOne = () => {
    const[count,setCount] = useState(0)
  return (
    <div>
        <h2>Count is : {count}</h2>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
        <MemoTwo count={count} />
    </div>
  )
}

export default MemoOne