import React, { useContext } from 'react'
import { BioContext } from './Index'

const Counter = () => {
  const{count,handleIncrement} = useContext(BioContext)
//   function handleIncrement(){
//     setCount(count+1)
//   }
  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter