import { configureStore } from "@reduxjs/toolkit";
import apiOpearte from "./apiOperate";
import apiComments from "./apiComments";

const store = configureStore({
    reducer:{
        [apiOpearte.reducerPath] : apiOpearte.reducer,
        [apiComments.reducerPath] : apiComments.reducer
    },
    middleware: (preMiddleware) => preMiddleware().concat([apiOpearte.middleware,apiComments.middleware])
})

export default store;
