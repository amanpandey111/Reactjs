//! Getting our data
// import { data } from "react-router"
import ac from "./api/ac.json"
import book from "./api/book.json"
import computer from "./api/computer.json"
import fridge from "./api/fridge.json"
import furniture from "./api/furniture.json"
import kitchen from "./api/kitchen.json"
import menwear from "./api/menwear.json"
import mobile from "./api/mobile.json"
import speaker from "./api/speaker.json"
import tv from "./api/tv.json"
import watch from "./api/watch.json"
import womenwear from "./api/womenwear.json"

//! getting the necessary packages from redux and react-redux
import { createStore } from "redux"

//! setting up our task performing task
const addCount = "task/increment"
const addDataCart = "task/adddata"
const decrementQuantity = "task/decrementquantity"
const removeDataCart = "task/removedata"
const cartPop = "task/cartPop"
const handleInput = "task/inputlist"

//todo : Let's Create a centralize data store

const initialState = {
    ac,book,computer,fridge,furniture,kitchen,menwear,mobile,speaker,tv,watch,womenwear,
    count:0,
    cartData:[],
    totalCost:0,
    isCount:false,
    searchTerm:"",
    suggestion:[]

}

const allProducts = [
    ...mobile, ...computer, ...watch, ...menwear, ...womenwear,
    ...furniture, ...kitchen, ...book, ...fridge, ...speaker, ...ac, ...tv
];


//todo : creating reducer function

const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        case addCount:
            if(state.cartData.length<1){
                return{
                    ...state,
                    cartData:[...state.cartData],
                    count:state.count+1,
                    totalCost:action.payload.price
                }
            }else{
                let checkBool = state.cartData.some((curEle)=>curEle.id==action.payload.id)
                if(checkBool){
                    return{
                        ...state,
                        cartData:[...state.cartData],
                        count:state.count
                    }
                }else{
                    return{
                        ...state,
                        cartData:[...state.cartData],
                        count:state.count+1
                    }
                }
            }
        case addDataCart:
            if(state.cartData.length<1){
                action.payload.quantity=1
                return {
                    ...state,
                    cartData:[...state.cartData,action.payload],
                    totalCost:action.payload.price
                }
            }
            else{
                let bool = state.cartData.some((curEle)=>curEle.id==action.payload.id)
                // console.log(bool);

                if(bool){
                    let update = state.cartData.map((curEle)=>
                        curEle.id==action.payload.id ? (curEle.quantity>=10 ? {...curEle,quantity:curEle.quantity} : {...curEle,quantity:curEle.quantity+1}) : curEle
                    )
                    console.log(update);
                    let prices = update.map((curEle)=>curEle.price*curEle.quantity)
                    console.log(prices);
                    let t = prices.reduce((accum,curr)=>accum+curr,0)
                    console.log(t);
                    return {
                        ...state,
                        cartData:update,
                        totalCost:t
                    }
                }else{
                    action.payload.quantity=1
                    let cart = [...state.cartData,action.payload]
                    console.log(cart);
                    let prices = cart.map((curEle)=>curEle.price*curEle.quantity)
                    let t = prices.reduce((accum,curr)=>accum+curr,0)
                    console.log(t);
                    // let prices = update.map((curEle)=>curEle.price*curEle.quantity)
                    // console.log(prices);
                    return{
                        ...state,
                        cartData:[...state.cartData,action.payload],
                        totalCost:t
                    }
                }
            }
        case removeDataCart:
            let newData = state.cartData.filter((curEle)=>curEle.id !== action.payload)
            let price = newData.map((curEle)=>curEle.price*curEle.quantity)
            let t1 = price.reduce((accum,curr)=>accum+curr,0)
            return{
                ...state,
                cartData:newData,
                count:state.count-1,
                totalCost:t1
            }
        case decrementQuantity:
            let updatData = state.cartData.map((curEle)=>{
                if(curEle.id==action.payload.id){
                    if(curEle.quantity<=1){
                      return {...curEle,"quantity":1}
                    }else{
                      return {...curEle,"quantity":curEle.quantity-1}
                    }
                  }else{
                    return {...curEle,"quantity":curEle.quantity}
                  }
            })
            let prices = updatData.map((curEle)=>curEle.price*curEle.quantity)
            console.log(prices);
            let t = prices.reduce((accum,curr)=>accum+curr,0)
            console.log(t);
            return{
                ...state,
                count:state.count,
                cartData:updatData,
                totalCost:t
            }
        case cartPop:
            if(action.payload==false){
                return{
                    ...state,
                    isCount:false,
                    searchTerm:'',
                    suggestion:[]
                }
            }
            else{
                return{
                    ...state,
                    isCount:!state.isCount
                }
            }
        case handleInput:
            // console.log(action.payload);
            let value = action.payload
            console.log(value);
            if(value.trim()==''){
                return{
                    ...state,
                    searchTerm:'',
                    suggestion:[]
                }
            }
            else{
                const filtered = allProducts.filter((curEle)=>curEle.model.toLowerCase().includes(value.toLowerCase()))
                console.log(filtered);
                return {
                    ...state,
                    searchTerm:action.payload,
                    suggestion:filtered.slice(0,5)
                }
            }
        default:
            return state
    }
}

//todo : creating our main store
export const store = createStore(taskReducer)

//todo : writing the reusable funtions
export const addCartDataStore = (data) => {
    console.log(data);
    // store.dispatch({type:addDataCart,payload:data})
    return { type: addDataCart, payload: data }
}

export const countIncrement = (data) => {
    console.log(data.id);
    // store.dispatch({type:addCount,payload:data.id})
    return { type: addCount, payload: data}
}

export const decrementQuant = (data) => {
    return{type:decrementQuantity,payload:data}
}

export const removeCartDataStore = (data) => {
    return{type:removeDataCart,payload:data.id}
}

export const handleCountPopup = (booldata) => {
    return{type:cartPop,payload:booldata}
}

export const handleInputStore = (str)=> {
    return{type:handleInput,payload:str}
}