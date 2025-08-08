import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "react-router-dom";

//! adding the data : POST
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const response = await fetch("https://68358ca9cd78db2058c21f50.mockapi.io/crud",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//! Getting the data : GET(default)
export const showUser = createAsyncThunk("showUser",async (arg,{rejectWithValue})=>{
    console.log("hello");
    const response = await fetch("https://68358ca9cd78db2058c21f50.mockapi.io/crud")
    try { 
        const result = await response.json()
        console.log(result);
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//! Deleting the data : DELETE
export const deleteUser = createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    console.log(id);
    const response = await fetch(`https://68358ca9cd78db2058c21f50.mockapi.io/crud/${id}`,{
        method:"DELETE"
    })
    try {
        const result = await response.json()
        console.log(result);
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//! Updating the user data ; PUT/PATCH
export const updateUser = createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
    const response = await fetch(`https://68358ca9cd78db2058c21f50.mockapi.io/crud/${data.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
        searchData:"",
        dropdown:false
    },
    reducers:{
        searchUser : (state,action) => {
            state.searchData=action.payload
        },
        setDropdown(state,action){
            // console.log(action.payload);
            if(action.payload=="global"){
                console.log("hy");
                state.dropdown=false
            }
            else if(action.payload==undefined){
                console.log("executed");
                state.dropdown=!state.dropdown
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(createUser.pending,(state,action)=>{     //todo : creating user
            state.loading=true;
        })
        .addCase(createUser.fulfilled,(state,action)=>{  //todo : creating user
            console.log(action.payload);
            state.loading=false
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected,(state,action)=>{  //todo : creating user
            state.loading=false
            state.error=action.payload
        })
        .addCase(showUser.pending,(state,action)=>{    //! show user
            state.loading=true;
        })
        .addCase(showUser.fulfilled,(state,action)=>{  //! show user
            state.loading=false
            state.users = action.payload                 //! here we don't need to push, here we want if we have data just store it
        })
        .addCase(showUser.rejected,(state,action)=>{   //! show user
            state.loading=false
            state.error=action.payload
        })
        .addCase(deleteUser.pending,(state,action)=>{     //? Delete User
            state.loading=true;
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{   //? Delete User
            state.loading=false
            console.log(action.payload);
            const {id} = action.payload
            state.users=state.users.filter((ele)=>ele.id!==id)
            // state.users = action.payload                 
        })
        .addCase(deleteUser.rejected,(state,action)=>{   //? Delete User
            state.loading=false
            state.error=action.payload
        })
        .addCase(updateUser.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
            state.loading=false
            state.users=state.users.map((ele)=>(
                ele.id==action.payload.id ? action.payload : ele
            ))
        })
        .addCase(updateUser.rejected,(state,action)=>{
            state.loading=true
            state.error=action.payload
        })
    }
});

export default userDetail.reducer
export const {searchUser,setDropdown} = userDetail.actions