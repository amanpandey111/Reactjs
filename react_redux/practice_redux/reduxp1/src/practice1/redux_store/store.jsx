import { createStore } from "redux";

//! creating an action
const increment = "counter/increment"
const decrement = "counter/decrement"
const reset = "counter/reset"

//! creating resudcers
const intislstate = {
  value: 0
}
const counterReducer = (state=intislstate,action) => {
  switch(action.type){
    case increment:
      return{"value":state.value+1}
    case decrement:
      return {"value":state.value-1}
    case reset:
      return {"value":0}
    default:
      return state
  }
}

//! creating store
const store = createStore(counterReducer)
export default store

//! creating action creators
export const addCount=()=>{
  return{type:increment}
}

export const minusCount = () => {
  return {type:decrement}
}

export const resetCount = () => {
  return {type:reset}
}