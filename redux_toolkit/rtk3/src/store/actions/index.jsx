import { createAction } from "@reduxjs/toolkit";
// import { removeAllUser } from "../slices/UserSlice";

export const removeAllUser = createAction('removeAllUser')


// export const extra = extraReducers(builder){
//         builder.addCase(removeAllUser,()=>{
//             return [];
//         })
//     }