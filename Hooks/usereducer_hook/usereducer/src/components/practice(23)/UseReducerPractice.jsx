import { useReducer } from 'react'

const UseReducerPractice = ()=> {
    const reducer = (count,action)=> {

        //! Normal Way and tedious
        // console.log(action);
        // if(action.type=="increment"){
        //     return count+1
        // }else if(action.type=="decrement"){
        //     return count-1
        // }else if(action.type=="reset"){
        //     return 0
        // }else{
        //     return count
        // }

        //! recommeded way of doing such tedious task
        switch (action.type) {
            case "increment":
                return count+1
            case "decrement":
                return count-1
            case "reset":
                return 0
            default:
                return count
        }
    }
    const[count,dispatch] = useReducer(reducer,0)
    return(
        <div>
            <h1>Let's Practice usereducer hook</h1>
            <h3>Count is : {count}</h3>
            <button onClick={()=>dispatch({type:"increment"})} >Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}
export default UseReducerPractice