import React, { useReducer } from 'react'

const BestPractices = () => {
    const initialState = {
        count:0,
        inc:2,
        dec:2
    }
    function reducer(state,action){
        // console.log(state,action);

        //! Very first way
        // if(action.type=="increment"){
        //     return state+1
        // }else if(action.type=="decrement"){
        //     return state-1
        // }else if(action.type=="reset"){
        //     return 0
        // }
        console.log(state,action);
        switch(action.type){
            case "increment":
                return {
                    ...state,count:state.count+1
                }
            case "decrement":
                return {...state,count:state.count-1}
            case "reset":
                return {...state,count:0}
            default:
                return state
        }
    }
    const[state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h2>Best Practices In useReducer Hook</h2>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default BestPractices