import { applyMiddleware , createStore } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk"


const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete"
const Fetch_TASK = "task/fetch"

const initialState = {
    task:[],
    isLoading:false
}

//todo : 1.creating a reducer function
const taskReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                task:[...state.task,action.payload],
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask,index)=>{
                return index !== action.payload
            });
            return{
                ...state,
                task:updatedTask
            }
        case Fetch_TASK:
            return{
                ...state,
                task:[...state.task,...action.payload]
            }
        default:
            return state
    }
}

//todo : 2.creating a Redux store
export const store = createStore(taskReducer,composeWithDevTools(applyMiddleware(thunk)))
console.log(store);

//todo : 3.Log the initial state
console.log("initial state ",store.getState());

//todo : 4.dispatch() an action
store.dispatch({type:ADD_TASK,payload:"Buy ThapaTechnical Code"})

console.log("updated state ",store.getState());
store.dispatch({type:ADD_TASK,payload:"buy mango again"})
console.log("updated state ",store.getState());

store.dispatch({type:DELETE_TASK,payload:1})
console.log("updated state ",store.getState());

//! Action Creator :- This is not a part of this but to simplify the code 
export const addTask = (data)=> {
    return {type:ADD_TASK,payload:data}
}
 export const deleteTask = (id)=> {
    return {type:DELETE_TASK,payload:id}
}

store.dispatch(addTask("buy vegetables"))
store.dispatch(addTask("buy mangoes"))

console.log("updated state ",store.getState());

store.dispatch(deleteTask(1))
console.log("updated state ",store.getState());

store.dispatch(addTask("buy vegetables"))
store.dispatch(addTask("attend the classess"))

//! Redux Thunk : To fetch the data 
export const fetchTask = ()=> {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json()
            console.log(task);
            dispatch({type:Fetch_TASK,payload:task.map((curTask)=>curTask.title)})
        } catch (error) {
            console.log(error);
        }
    }
}