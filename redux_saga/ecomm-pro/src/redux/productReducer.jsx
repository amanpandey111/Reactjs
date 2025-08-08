import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data=[],action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log("product reducer got invoked");
        //     console.log(action.data);
        //     return [...data,action.data]
        case SET_PRODUCT_LIST:
            console.log(action.data);
            return [...action.data]
            // return [...data,...action.data]
        default:
            return data
    }
}