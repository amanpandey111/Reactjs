import React, { useReducer } from 'react'

const BestPractices1 = () => {
    const initialValue = {
        count:0,
        inc:2,
        dec:2
    }

    function reduce(state,action){
        console.log(state);
        switch(action.type){
            case "increment":
                return {...state,count:state.count+state.inc}
            case "decrement":
                return {...state,count:state.count-state.dec}
            case "reset":
                return {...state,count:state.count=0}
            default:
                return state
        }
    }
    const[state,func]=useReducer(reduce,initialValue)

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={()=>func({type:"increment"})}>Increment</button>
            <button onClick={()=>func({type:"decrement"})}>Decrement</button>
            <button onClick={()=>func({type:"reset"})}>Reset</button>
        </div>
    )
}

export default BestPractices1