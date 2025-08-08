import { createSlice } from "@reduxjs/toolkit" //! Importing createSlice
// import { act } from "react";
import { clearAllUsers } from "../actions";

//! creating slice
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1)
            console.log(action.payload);
        },
        // clearAllUsers(state,action){
        //     // return state = []  //! here we are assigning new state with empty square bracket
        //     state.splice(0)
        //     console.log("deleted all users");
        // },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            console.log("delete");
            return [];
        })
    }
})

console.log(userSlice.actions);

export default userSlice.reducer   //? or export {userSlice}

//! Action creator : Export is happen with the help of action creator
// export const { addUser,removeUser,clearAllUsers } = userSlice.actions
export const { addUser,removeUser} = userSlice.actions  //! writing this when we are creating clearAllUsers using createAction