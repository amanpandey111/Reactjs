import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions/Action";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUsers(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        // removeAllUser(state){
        //     state.splice(0)
        // }
    },
    extraReducers(builder){
        builder.addCase(deleteAllUsers,(state)=>{
            return []
        })
    }
})

export default userSlice.reducer

export const {addUsers,removeUser,removeAllUser} = userSlice.actions