import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import { counterReducer } from "./slices/UserSlice";

const store = configureStore({
    reducer:{
        users:userSlice,
        counter:counterReducer,
    }
})

export default store 