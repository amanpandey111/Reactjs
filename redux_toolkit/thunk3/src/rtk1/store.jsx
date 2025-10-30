import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'

const store = configureStore({
  reducer:{
    MyCounter: counterSlice
  }
})

export default store