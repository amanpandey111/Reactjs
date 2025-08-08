import React, { useMemo, useState } from 'react'

const Memo = () => {
    const[add,setAdd] = useState(0)
    const[state,setState] = useState(false)

    const addition = () => {
        setAdd((prev)=>prev+1)
    }

    function count(add){
        console.log("function calling",add);
        for(let i=0; i<=1990000800; i++){
            
        }
        console.log("function calling done");
        return add
    }

    let number = useMemo(()=>{
        return count(add)
    },[add])

    // let number = count(add)
    return (
        <div>
            <button onClick={addition} >Addition</button>
            <h1>Count is :{number}</h1>
            <button onClick={()=>setState(!state)}>click me</button>
            <h1>{state?"You clicked":"Please click"}</h1>
        </div>
    )
}

export default Memo