import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { increment, decremnt, inputchange } from './actions'

//! Creating Action
// const increment = "counter/increment"
// const decremnt = "counter/decrement"
// const inputchange = "input/change"

//! Creating the initial state object
const initialState = {
    count:0
}

const inputState = {
    inputText:0
}

//! creating reducer
const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        case increment:
            if(action.payload){
                console.log("HY");
                return{
                    count:state.count+action.payload
                }
            }
            else if(action.payload==0){
                return{
                    count:state.count+0
                }
            }
            else if(!action.payload) {
                return {
                    count:state.count+1
                }
            }
            else{
                return state
            }
            
        case decremnt:
            if(action.payload==0){
                return{
                    count:state.count+0
                }
            }
            else if(action.payload>0){
                return{
                    count:state.count-action.payload
                }
            }
            else{
                return{
                    count:state.count-1
                }
            }
        default:
            return state
    }
}

const taskReducerInput = (state=inputState,action)=>{
    switch (action.type) {
        case inputchange:
            return{
                inputText:action.payload
            }
        default:
            return state
    }
}

//? using combineReducer
// const rootReducer = combineReducers({
//     taskReducer,
//     taskReducerInput
// })

const rootReducer = {
    taskReducer,
    taskReducerInput
}

//! creating a store using configureStore Not by createStore(it is deprecated)
const store = configureStore({
    // reducer: {
    //     taskReducer,
    //     taskReducerInput
    // }
    reducer:rootReducer
})

//! Creating Action Creator
export const incrementCount = (data)=> {
    return {type:increment,payload:data}
}
export const decrementCount = (data)=> {
    return{type:decremnt,payload:data}
}
export const inputChange = (string)=> {
    return{type:inputchange,payload:string}
}

export default store