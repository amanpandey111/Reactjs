import React, { memo, useMemo, useState } from 'react'

const UseMemoTask3 = () => {
    const[count,setCount] = useState(0)
    let obj = useMemo(()=>{
        return {
            name:"aman",
            college:"Jbrec"
        }
    },[])
  return (
    <div>
        <ChildMemo3 obj={obj}/>
        <p>Count :{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)} >Increment</button>
    </div>
  )
}

export default UseMemoTask3

const ChildMemo3 = memo(({obj}) => {
    console.log("I got clicked");
    return(
        <div>
            <h1>{obj.name}</h1>
        </div>
    )
})