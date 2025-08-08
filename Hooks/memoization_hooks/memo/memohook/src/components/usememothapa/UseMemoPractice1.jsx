import React, { useMemo, useState } from 'react'

const UseMemoPractice1 = () => {
    const[count,setCount] = useState(0)
  return (
    <>
      <UseMemoChild/>
      <h3>Count is {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default UseMemoPractice1

const UseMemoChild = ()=> {
    const expensiveTask = () => {
        let total = 0
        console.log("expensive task started");
        for(let i=0;i<=10000000000;i++){
            total+=i
        }
        console.log("expensive task end");
        return total
    }
    let sum = useMemo(()=>expensiveTask(),[])
    return(
        <>
           <h2>Here will do the expensive calculation</h2>
           <h3>After Calculation result is : {sum} </h3>
        </>
    )
}