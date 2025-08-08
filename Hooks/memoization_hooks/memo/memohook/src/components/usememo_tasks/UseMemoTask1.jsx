import React, { useMemo, useState } from 'react'

const UseMemoTask1 = () => {
    const[count,setCount] = useState(0)
    const[name,setName] = useState("")

    function slowDouble(){
        console.log("double function rendered");
        let total=0
        for(let i=0;i<1800000000;i++){
            total+=i
        }
        console.log("for loop completed in double function");
        return total
    }
    const double=useMemo(()=>{
        slowDouble()
    },[count])
  return (
    <div>
        <input type="text"
          value={name}
          placeholder='Type Your Name'
          onChange={(e)=>setName(e.target.value)} />
        <h2>Name :{name}</h2>
        <p>Count :{count}</p>
        <h3>Double :{double}</h3>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default UseMemoTask1