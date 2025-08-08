import { useContext } from "react"
import { newContext1 } from "./Parent3"

const Child3 = () => {
    const{state,dispatch} = useContext(newContext1)
    console.log(state);
  return (
    <>
      <h1>Count : {state.count} </h1>
      <button onClick={()=>dispatch({type:"increment"})} >Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})} >Decrement</button>
    </>
  )
}

export default Child3