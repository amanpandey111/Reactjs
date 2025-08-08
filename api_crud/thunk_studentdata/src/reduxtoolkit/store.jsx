import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./StudentSlice"

export const store = configureStore({
    reducer:{
        studentSlice
    },
})