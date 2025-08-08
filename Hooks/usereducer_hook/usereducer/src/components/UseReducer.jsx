import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    // let [count,setCount] = useState(0);
    const reducer = (count,action) =>{
        // console.log(state,action);
        if(action.type === "increment"){
            return count+1
        }else{
            return count-1
        }
    }
    let [count,dispatch] = useReducer(reducer,0)
    console.log(useReducer(reducer,0));
  return (
    <div>
        <h1>Here we are using UseReducer Hook</h1>
        {/* <h1>{count}</h1>
        <h1>{count}</h1> */}
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
            <br /><br />
            <button onClick={()=>{dispatch({type:"decrement"})}} >Decrement</button>
        </div>
    </div>
  )
}

export default UseReducer