import { createSlice,createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok){
                throw new Error("Failed to fetch users")
            }
            const data = await response.json()
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
            return isRejectedWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name:"user",
    initialState:{
        "users_name":[],
    },
    reducers:{
        addUser(state,action){
            state.users_name.push(action.payload)
        },
        removeUser(state,action){
            state.users_name.splice(action.payload,1)
        },
        removeAllUser(state){
            state.users_name.splice(0)
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchUser.pending,(state,action)=>{
            console.log("fetching user");
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            console.log("user data fetched");
            console.log(action.payload);
            let names = action.payload.map((curEle)=>curEle.name)
            console.log(names);
            return {
                ...state,
                users_name:[...state.users_name,...names]
            }
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            console.log("can't fetch data");
        })
    }
})

export const {addUser,removeAllUser,removeUser} = userSlice.actions

export default userSlice.reducer