import { useRef, useState } from "react"
import React from "react"

const ReactMemoPractice5 = ()=> {
    const [count, setCount] = useState(0);

    const toggleName = count % 2 === 0 ? "Aman" : "force";

    return(
        <>
          <h4>Let's Practice the React.memo where we will pass function(without useCallback) as a argument : Leads to re-render</h4>
          <p>Parent Count is : {count}</p>
          <button onClick={()=>setCount(count+1)}>increment</button>
          <ChildMemo5 name={toggleName} />
        </>
    )
}
export default ReactMemoPractice5

const areEqual = (prevProp,nextProp) => {
    console.log(prevProp,nextProp);
    return nextProp.name !== "force";
}

const ChildMemo5 = React.memo(({name})=> {
    const refCount = useRef(0)
    console.log("got re-rendered");
    return(
        <>
          <h3>I got rendered {refCount.current++} times</h3>
          <h4>{name}</h4>
        </>
    )
},areEqual)
