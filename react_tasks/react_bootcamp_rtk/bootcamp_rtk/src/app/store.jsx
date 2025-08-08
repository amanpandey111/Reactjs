import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/UserSlices"

const store = configureStore({
    reducer:{
        app:userSlice
    }
})

export default store