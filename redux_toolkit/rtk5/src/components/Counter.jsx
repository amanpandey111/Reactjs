import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../rtk/counterSlice';
import { changeName } from '../rtk/nameSlice';

const Counter = () => {
    const[name,setName] = useState("")
    const myval = useSelector((state)=>state.counter.value)
    const myname = useSelector((state)=>state.nameslice.name)
    console.log(name);
    const dispatch = useDispatch()
  return (
    <div>
        <p>Count is {myval}</p>
        <button onClick={()=>dispatch(increment())} >increment</button>
        <button onClick={()=>dispatch(decrement())} >decrement</button> <br /> <br />
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='enter your name' /> 
        <button onClick={()=>dispatch(changeName(name))} >change the username</button>
        <h3>currently {myname} is viewing the screen</h3>
    </div>
  )
}

export default Counter