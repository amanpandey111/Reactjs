import React, { createContext, useReducer, useState } from 'react'

//! step 1: Create a context
export const practicecontext = createContext()


const Parent4 = ({children}) => {
    let initialstate = {
        count:0
    }

    const reducer = (state,action) => {
        switch(action.type){
            case "increment":
                console.log("let's do increment");
                return {...state,count:state.count+1}
            case "decrement":
                console.log("let's do decrement");
                return {...state,count:state.count-1}
        }
    }

    const[state,dispatch] = useReducer(reducer,initialstate)
  return (
    <practicecontext.Provider value={{state,dispatch}} >
        {children}
    </practicecontext.Provider>
  )
}

export default Parent4