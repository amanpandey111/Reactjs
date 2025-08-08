import { useReducer } from "react"
import Button from "./Button"

const Counter1 = () => {
  function reducer(state,action){
    switch (action.type) {
      case "up":
        return state=state+1
      case "down":
        return state=state-1
      case "reset":
        return state=0
      default:
        return state
    }
  }
  const[count,dispatch] = useReducer(reducer,0)
  return (
    <>
      <h1>{count}</h1>
      <Button text="Up" dispatch = {()=>dispatch({type:"up"})} />
      <Button text="Down" dispatch = {()=>dispatch({type:"down"})} />
      <Button text="Reset" dispatch = {()=>dispatch({type:"reset"})} />
    </>
  )
}

export default Counter1