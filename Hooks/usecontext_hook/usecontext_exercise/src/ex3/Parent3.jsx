import { createContext, useReducer, useRef } from "react"

export const newContext1 = createContext()

const Parent3 = ({children}) => {
    let initialstate = {
        count:0,
        inc:2,
        dec:1
    }
    function reducer(state,action){
        switch (action.type) {
            case "increment":
                console.log("Let's Increment");
                return {...state,count:state.count+1}
            case "decrement":
                console.log("Let's Decrement");
                return {...state,count:state.count-1}
            default:
                break;
        }
    }
    const[state,dispatch] = useReducer(reducer,initialstate)
  return (
    <newContext1.Provider value={{state,dispatch}} >
        {children}
    </newContext1.Provider>
  )
}

export default Parent3