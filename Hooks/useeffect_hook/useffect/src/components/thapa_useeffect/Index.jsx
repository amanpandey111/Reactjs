import React, { useState } from 'react'
import { useEffect } from 'react'
import './index.css'

const Index = () => {
    //! very first example
    // let[count,setCount] = useState(0)

    // useEffect(()=>{
    //     // console.log("hello use-effect");
    //     console.log("count value :",count);
    // },[count])

    // return (
    //     <div className='container effect-container'>
    //         <h1>Hello Use Effect</h1>
    //         <p>Count : {count}</p>
    //         <button onClick={()=>setCount(count+1)} >Increment</button>
    //     </div>
    // )

    //! Lets Implemet the real world time update continously
    const[date,setDate] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            const updateDate = new Date()
            setDate(updateDate.toLocaleTimeString())
        },1000)
    },[])
    return(
        <div className="container effect-container">
            <h1>Date : {date}</h1>
        </div>
    )
}

export default Index