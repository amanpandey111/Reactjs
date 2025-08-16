import { createStore } from "redux";

//! setting up action
const incrmentCount = "counter/increment"
const decrement = "counter/decrement"
const reset = "counter/reset"

//! creating reducers
const intislstate = {
    value:0
}
const counterReducer = (state=intislstate,action) => {
    switch(action.type){
        case incrmentCount:
            console.log("increme count");
            console.log(state);
            return {"value":state.value+1}
        case decrement:
            console.log("decrement");
            return {value:state.value-1}
        case reset:
            console.log("reset the value");
            return {value:0}
        default:
            return state
    }
}

//! creating store
const store = createStore(counterReducer)
export default store

//! creating action creator
export const addCount=()=>{
    return{type:incrmentCount}
}

export const decreaseCount=()=>{
    return{type:decrement}
}

export const resetCount = () => {
    return{type:reset}
}