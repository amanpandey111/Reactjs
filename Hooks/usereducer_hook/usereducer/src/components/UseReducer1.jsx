import React, { useReducer } from 'react'

const UseReducer1 = () => {
    const initialState = {
        count:0,
        inc:2,
        dec:2,
    };
    const reducer = (state,action) => {
        console.log(state);

        //! simply we are using if-else condition
        // if(action.type === "increment"){
        //     return state+1
        // }else if(action.type === "decrement"){
        //     return state-1
        // }else if(action.type === "reset"){
        //     return state=0
        // }

        //! optimizing by using switch concept
        // switch (action.type) {
        //     case "increment":
        //         return state+1;
        //     case "decrement":
        //         return state-1;
        //     case "reset":
        //         return state=0;
        
        //     default:
        //         return state
        // }

        //! when we are having more values then storing in object
        // switch (action.type) {
        //     case "increment":
        //         return {count:state.count+1};
        //     case "decrement":
        //         return {count:state.count-1};
        //     case "reset":
        //         return {count:0};
        
        //     default:
        //         return state
        // }

        //! when we have more than one key:value in our object so to retain them we use spread operator
        switch (action.type) {
            case "increment":
                return {...state,count:state.count+1};
            case "decrement":
                return {...state,count:state.count-1};
            case "reset":
                return {...state,count:0};
        
            default:
                return state
        }
    }
    let [count,dispatch] = useReducer(reducer,initialState)
    // console.log(useReducer(reducer,1));
  return (
    <div>
        <h3>Here we will discuss best practices for useReducer hook</h3>
        <div>
            <h3>{count.count}</h3>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
        </div>
    </div>
  )
}

export default UseReducer1