import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"
import nameSlice from "./nameSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        nameslice: nameSlice
    }
})

export default store;