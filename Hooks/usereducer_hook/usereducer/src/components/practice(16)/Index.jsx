import { useReducer } from "react"

const Index = ()=> {
    function reducer(state,action){
        console.log(state);
        if(action.type=="increment"){
            return state+1
        }else{
            return state-1
        }
    }
    let[count,dispatch]=useReducer(reducer,0)
    return(
        <>
          <h1>Use Reducer Hook</h1>
          <p>{count}</p>
          <button onClick={()=>dispatch({type:"increment"})} >Increment</button>
          <button onClick={()=>dispatch({type:"decrement"})} >Decrement</button>
        </>
    )
}
export default Index