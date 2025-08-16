import React, { useEffect, useState } from 'react';

function ScrollTracker() {
const[count,setCount] = useState(0)

useEffect(()=>{
    console.log("useEffect executing");
    const timer = setInterval(()=>{
        console.log("interval executing");
        setCount((prev)=>prev+1)
    },1000)
    console.log(count);
    return () => {
        console.log("clean up function");
        clearInterval(timer)
    }
},[])

  return <div>
    <h1>Let's Learn cleanup function</h1>
    <h2>My Youtube subscribers are {count}</h2>
  </div>
}

export default ScrollTracker;