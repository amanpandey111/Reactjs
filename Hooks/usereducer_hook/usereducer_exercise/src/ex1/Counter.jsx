import { useReducer } from "react"

const Counter = () => {
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
    const[state,dispatch] = useReducer(reducer,0)
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"up"})} >Go Up</button>
      <button onClick={()=>dispatch({type:"down"})} >Go Down</button>
      <button onClick={()=>dispatch({type:"reset"})} >Reset</button>
    </>
  )
}

export default Counter