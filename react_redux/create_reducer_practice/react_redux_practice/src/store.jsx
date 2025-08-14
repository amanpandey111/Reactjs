import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"
const FETCH_TASK = "task/fetch"

const initialState = {
    task:[],
    isLoading:false 
}

//todo : 1.let's create a reducer function
const taskReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state,
                task:[...state.task,action.payload]
            }
        case DELETE_TASK:
            console.log(action.payload);
            const updatedTask = state.task.filter((curEle,index)=>{
                return index !== action.payload
            })
            return {
                ...state,
                task:updatedTask
            }
        case FETCH_TASK:
            return{
                ...state,
                task:[...state.task,...action.payload]
            }
        default:
            return state;
    }
}

//todo : 2.Creating a Redux store
export const store = createStore(taskReducer,applyMiddleware(thunk))

//todo : 3.Log the initial state
// console.log("initial state :",store);
console.log("initial state :",store.getState());

//todo : 4.dispatch and action
store.dispatch({type:ADD_TASK,payload:"Buy Mangoes"})
console.log("updated state ",store.getState());

store.dispatch({type:ADD_TASK,payload:"Buy bananas"})
console.log("Updated state ",store.getState());

store.dispatch({type:ADD_TASK,payload:"buy shirts"})
console.log("updated state ",store.getState());

store.dispatch({type:DELETE_TASK,payload:1})
console.log("updated task ",store.getState());

//! Let's reduce the complexity of dispatch by action creators
export const addTask = (data)=> {
    return {type:ADD_TASK,payload:data}
}
export const deleteTask = (id)=> {
    return {type:DELETE_TASK,payload:id}
}

store.dispatch(addTask("Buy Banana's"))
console.log("updated task ",store.getState());

store.dispatch(addTask("Buy Apples"))
console.log("Updated task ",store.getState());

store.dispatch(deleteTask(1))
console.log("updated task ",store.getState());

store.dispatch(deleteTask(0))
console.log("updated task ",store.getState());

//! Redux Thunk : To fetch the data 
// export const fetchTask = ()=> {
//     return async (dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
//             const data = await res.json()
//             console.log(data);
//             dispatch({type:FETCH_TASK,payload:data.map((curEle)=>curEle.title)})
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export const fetchTask = ()=> {
    console.log("store fetch executed");
    return async (dispatch) => {
        try {
            console.log("try block");
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json()
            console.log(task);
            dispatch({type:FETCH_TASK,payload:task.map((curTask)=>curTask.title)})
        } catch (error) {
            console.log(error);
        }
    }
}