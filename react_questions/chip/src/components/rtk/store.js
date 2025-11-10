import { configureStore } from "@reduxjs/toolkit"
import chipSlice from './reducer'
import accordianSlice from "../../acordian/accordianSlice"

//! creating store
const store = configureStore({
  reducer:{
    chipSlice:chipSlice,
    accordianSlice:accordianSlice
  }
})

export default store