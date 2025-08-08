import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers",async()=>{
    const response = await fetch("https://api.github.com/users");
    const result = await response.json()
    return result
})

export const gitUser = createSlice({
    name:"gitUser",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers()
})