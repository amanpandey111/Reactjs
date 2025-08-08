import React, { useEffect, useState } from 'react'

const CleanUp = () => {
    const[count,setCount] = useState(0)

    // setInterval(()=>{
    //     setCount(count+1)
    // },1000)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        return ()=>clearInterval(timer)
    },[])
    return (
        <div className="container">
            <div className="counter">
                <p>My Subscriber on Youtube</p>
                <div className="odometer" id='odometer'>
                    {count}
                </div>
                <h3 className='title'>Subscribers <br /> Realtime Counter </h3>
            </div>
        </div>
    )
}

export default CleanUp