import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// localStorage.clear()
// setLocalStorage()
// console.log("authSlice executed");

let checkdata = getLocalStorage()
// console.log(checkdata);
if(checkdata.employees !== null && checkdata.employees !== undefined  && checkdata.admin !== null && checkdata.admin !== undefined ){
    // console.log("data is present");
}else{
    // console.log("data is absent");
    setLocalStorage()
}

const initialState = {
    authdata:getLocalStorage()
}

const authSlice = createSlice({
    name:"ems",
    initialState,
    reducers:{
        setData:(state)=>{
            console.log("let's set the data");
            state.authdata = getLocalStorage()
            console.log(state.authdata);
        }
    }
})

export default authSlice.reducer
export const { setData } = authSlice.actions