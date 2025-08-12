import React, { useContext } from 'react'
import { practicecontext } from './Parent4'

const Child4 = () => {
    const{state,dispatch} = useContext(practicecontext)
    console.log(state);
  return (
    <div>
        <p style={{fontSize:"3rem"}} >Count is {state.count}</p>
        <button onClick={()=>dispatch({type:"increment"})} >Increment Count</button>
        <button onClick={()=>dispatch({type:"decrement"})} >Decrement Count</button>
    </div>
  )
}

export default Child4