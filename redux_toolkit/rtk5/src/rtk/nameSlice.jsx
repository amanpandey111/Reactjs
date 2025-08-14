import { createSlice } from "@reduxjs/toolkit";

const initialName = {
    name:"Aman Pandey"
}

const nameSlice = createSlice({
    name:'name',
    initialState: initialName,
    reducers:{
        changeName : (state,action)=>{
            state.name = action.payload
        }
    }
})

export const {changeName} = nameSlice.actions
export default nameSlice.reducer;