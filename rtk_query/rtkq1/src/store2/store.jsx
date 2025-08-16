import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import counterSlice from "./counterSlice"

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        counter:counterSlice
    },
    middleware: (preMiddleware) => preMiddleware().concat([apiSlice.middleware])
})

export default store