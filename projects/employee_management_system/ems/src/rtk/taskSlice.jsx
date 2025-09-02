import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    value : 0
}

const taskSlice = createSlice({
    name:"taskSlice",
    initialState:initialstate,
    reducers:{
        increment:(state)=>{
            state.value+=1
        }
    }
}) 

export default taskSlice.reducer
export const { increment } = taskSlice.actions