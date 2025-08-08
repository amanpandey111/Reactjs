import React, { useEffect, useState } from 'react'

const Interval = () => {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        let id = setInterval(()=>{
            console.log("Interval says hello!");
        },1000)
        return () => clearInterval(id)
    },[])
  return (
    <section>
        <h1>Count : {count} </h1>
        <button onClick={()=>setCount(count+1)} >Go Up !..</button>
    </section>
  )
}

export default Interval