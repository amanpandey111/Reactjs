import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data=[],action) => {
    console.warn("reducer is called");
    switch (action.type) {
        case ADD_TO_CART:
            console.log("add to cart executed");
            console.log(action.data);
            const newData = [action.data, ...data.filter(item => item.id !== action.data.id)];
            // return [action.data,...data]
            return newData
        case REMOVE_TO_CART:
            console.log("remove to cart reducer executed",action.data);
            return data.filter((item)=>item.id!==action.data)
        case EMPTY_CART:
            return []
        default:
            return data
    }
}