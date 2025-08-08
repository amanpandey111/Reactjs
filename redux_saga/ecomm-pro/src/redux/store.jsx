// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";                //todo: importing a saga middleware function
import createSagaMiddleware from "redux-saga";         //! import createSagaMiddleware  

const sagaMiddleware = createSagaMiddleware();         //todo: 1.creating saga middleware
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]                    //todo: 2.Register sagaMiddleware
})

sagaMiddleware.run(productSaga)                        //todo: 3.Register sagaMiddleware

export default store