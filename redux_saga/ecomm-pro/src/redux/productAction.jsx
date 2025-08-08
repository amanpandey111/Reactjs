import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/comments")
    // data = await data.json()
    // console.log("product action is called",data);
    return{
        type:PRODUCT_LIST,
    }
}