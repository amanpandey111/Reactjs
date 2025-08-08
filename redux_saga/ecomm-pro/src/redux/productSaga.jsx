import { takeEvery,put } from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts(){
    console.warn("Let's Get the Data");
    let data = yield fetch("http://localhost:3000/products")
    data = yield data.json()
    console.log(data);
    yield put({type:SET_PRODUCT_LIST,data})                    //! After Fetching Let's store in our data base
}

function*   productSaga(){
    // let data = yield f`etch("https://jsonplaceholder.typicode.com/comments")
    // data = yield data.json()
    // console.log(data);`
    // console.log("hello I am middleware");    
    yield takeEvery(PRODUCT_LIST,getProducts)
}
export default productSaga  