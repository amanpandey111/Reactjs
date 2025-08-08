import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//todo let's set base url for our axios
const api = axios.create({
    baseURL:"http://localhost:3000/"
})

//! Let's Fetch The Data
export const fetchStudent = createAsyncThunk("fetchstudent",async()=>{
    let res = await api.get("students")
    console.log(res.data);
    return res.data
})

//! Let's post the data in the api
export const storeStudent = createAsyncThunk("storestudent",async(data)=>{
    console.log("let's store the data ",data);
    let res = await api.post("students",data)
    console.log(res);
    return res
})

//! Let's delete the data from API
export const deleteStudent = createAsyncThunk("deletestudent",async(id)=>{
    console.log("let's delete the data",id);
    let res = await api.delete(`students/${id}`)
    console.log(res);
    return res
})

//! Let's update the data
export const updateStudent = createAsyncThunk("updatestudent",async(s)=>{
    let{studentid,updatedata} = s 
    // console.log("Let's update the data :",studentid,updatedata);
    let res = await api.put(`students/${studentid}`,updatedata)
})

const studentSlice = createSlice({
    name:"studentdata",
    initialState:{
        student:[]                                         //! we are storing the api data completely here
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchStudent.fulfilled,(state,action)=>{               //todo Fetching the Data
            state.student=action.payload 
            // console.log(action.payload);
        })
        .addCase(storeStudent.fulfilled,(state,action)=>{              //todo storing the data
            console.log("let's store the data ",action.payload);
        })
        .addCase(deleteStudent.fulfilled,(state,action)=>{
            console.log(action.payload.data);
            // return [...state]
        })
    }
})

export default studentSlice.reducer