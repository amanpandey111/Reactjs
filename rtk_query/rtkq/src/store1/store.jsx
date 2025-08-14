//! This is the not recommended way
// import { configureStore } from "@reduxjs/toolkit";
// import apiSlice from "./apiSlice";
// import deleteApiSlice from "./deleteApiSlice";

// const store = configureStore({
//     reducer:{
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         [deleteApiSlice.reducerPath]: deleteApiSlice.reducer
//     },
//     middleware: (prevMiddlewares) => prevMiddlewares().concat([apiSlice.middleware, deleteApiSlice.middleware]),
// })

// export default store;

//! this will be the recommended way
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (prevMiddlewares) => prevMiddlewares().concat([apiSlice.middleware]),
})

setupListeners(store.dispatch)

export default store;