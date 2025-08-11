import React, { useEffect, useState } from 'react'
import { use } from 'react';

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [total,setTotal] = useState(1)

    //! It willl alert for every re-render
    // useEffect(()=>{
    //     alert("I will give alert for every re-render")
    // })

    //! Runs only at once at first render
    // useEffect(()=>{
    //     alert("I will run only once")
    // },[])

    //! variation : 3
    // useEffect(()=>{
    //     alert("I will run when count is updated")
    // },[count])

    //! variation : 4
    // Multiple Dependencies
    // useEffect(()=>{
    //     alert("I willl every time when count or total is updated")
    // },[count,total])

    //! Lets write cleanup code
    useEffect(()=>{
        alert("count is updated")
        return ()=>{
            alert("count is unmounted from ui")
        }
    },[count])

    function handleClick(){
        setCount(count+1)
    }
    function handleTotal(){
        setTotal((prev)=>prev+1)
    }
  return (
    <div>
        <h1>Count is :{count}</h1>
        <button onClick={handleClick}>Update Count</button>
        <br />
        <br />
        <button onClick={handleTotal}>Update total</button>
        <h1>Total is : {total}</h1>
    </div>
  )
}

export default UseEffect