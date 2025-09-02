//! without using combine reducer
// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from './authSlice' 
// import taskSlice from './taskSlice'

// const store = configureStore({
//     reducer:{
//         auth:authSlice,
//         task:taskSlice
//     }
// })

// export default store

//! with using combine reducer
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './AuthSlice'
import taskSlice from './taskSlice'

const rootReducer = combineReducers({
    auth:authSlice,
    task:taskSlice
})

const store = configureStore({
    reducer:rootReducer
})

export default store