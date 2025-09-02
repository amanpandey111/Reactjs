import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    score:0,
    selectedOpt:"",
    curindex:0
}

const quizSlice = createSlice({
    name:"quizstore",
    initialState:initialstate,
    reducers:{
        scorechange:(state,action)=>{
            state.score += action.payload
        },
        selectchange:(state,action)=>{
            state.selectedOpt = action.payload
        },
        indexchange:(state,action)=>{
            state.curindex+=action.payload
        }
    }
})

export default quizSlice.reducer
export const {scorechange,selectchange,indexchange} = quizSlice.actions