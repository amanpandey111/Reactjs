import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/UserDetailSlice"

const store = configureStore({
    reducer:{
        app:userDetail    
    }
})

export default store