import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        clearAllUsers(state,action){
            state.splice(0)
        }
    }
})

export default userSlice.reducer 

//! Let's  create action creator so we can export
export const { addUser,removeUser,clearAllUsers } = userSlice.actions