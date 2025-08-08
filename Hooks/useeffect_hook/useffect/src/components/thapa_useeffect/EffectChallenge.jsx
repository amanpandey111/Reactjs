import React, { useEffect, useState } from 'react'
import './index.css'

const EffectChallenge = () => {
    const[count,setCount] = useState(0)
    const[name,setName] = useState("")

    function handleNameChange(e){
        setName(e.target.value)
        // console.log("Name is :",name);
    }

    useEffect(()=>{
        console.log("Name is :",name);
    },[name])

    useEffect(()=>{
        document.title=`Count : ${count}`
    },[count])

    return (
        <div className='container effect-container'>
            <h1>Use-Effect Challenge</h1>
            <p>
                Count : <span>{count}</span>
            </p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br />
            <p>Name : {name} </p>
            <input type="text" name='name' value={name} onChange={handleNameChange} autoComplete='off'/>
        </div>
    )
}

export default EffectChallenge