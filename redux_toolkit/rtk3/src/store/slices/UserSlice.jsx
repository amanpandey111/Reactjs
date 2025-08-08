import { createSlice } from "@reduxjs/toolkit";
import { removeAllUser } from "../actions";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            console.log(action.payload);
            state.splice(action.payload,1)
        },
        // removeAllUser(state){
        //     state.splice(0)
        // }
    },
    extraReducers(builder){
        builder.addCase(removeAllUser,(state,action)=>{      //! now removeAllUser is totally independent(not depending upon slices)
            return state=[];
        })
    }
})


const counterSlice = createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment(state){
            return state+1
        },
        decrement(state){
            if(state<=0){
                return 0
            }
            return state-1
        },
        reset(state){
            return 0
        }
    },
    // extraReducers
    // extraReducers(builder){
    //     builder.addCase(removeAllUser,(user,action)=>{
    //         return [];
    //     })
    // }
})

//! Let's Create action creator so we can export our micro reducer
export const { addUser,removeUser} = userSlice.actions   //! here we are getting removeAllUser from createaction so we don't need to export
// export const { addUser,removeUser,removeAllUser } = userSlice.actions
export const { increment,decrement,reset } = counterSlice.actions

export default userSlice.reducer
export const counterReducer = counterSlice.reducer 
