import React, { memo } from "react"
import { useRef } from "react"

const MemoCount = ({obj})=> {
    const refCount = useRef(0)
    console.log(refCount.current++);
    return(
        <div>
            <h1>I am Memo count I got Incremented By {refCount.current++}</h1>
            <h2>{obj.name}</h2>
        </div>
        
    )
}
export default memo(MemoCount)