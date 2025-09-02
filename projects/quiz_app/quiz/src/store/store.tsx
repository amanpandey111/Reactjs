import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import quizSlice from './quizSlice'

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        quizSlice : quizSlice
    },
    middleware:(prev)=>prev().concat([apiSlice.middleware])
})

export default store