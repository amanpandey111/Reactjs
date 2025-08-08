import React, { memo, useMemo, useState } from 'react'

const ExpensiveTask = React.memo(({count})=> {
    console.log("got rendered");
    const sum = ()=> {
        console.log("calculating sum...");
        let total = 0;
        for(let i=0; i<=10000000000; i++){
            total = total+1
        }
        console.log("expensive calculation is done");
        return total
    };
    const total = useMemo(()=>sum(),[])
    // const total = sum()
    return <p>sum: {total}</p>
})

const UseMemo = () => {
    const[count,setCount] = useState(0)
  return (
    <div>
        <ExpensiveTask count={count}/>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemo