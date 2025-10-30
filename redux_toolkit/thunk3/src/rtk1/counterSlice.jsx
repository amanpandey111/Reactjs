import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//! Get The Employee Detail
export const getEmployee = createAsyncThunk("getEmployee", async(arg,{rejectWithValue})=>{
  const response = await fetch("http://localhost:3000/employees")
  try{
    const result = await response.json()
    return result
  }catch(error){
    return rejectWithValue(error)
  }
})

//! Delete method
export const deleteEmployee = createAsyncThunk("deleteEmployee",async(id,{rejectWithValue})=>{
  console.log(id);
  const response = await fetch(`http://localhost:3000/employees/${id}`,{
    method:"DELETE"
  })
  try{
    const result = await response.json()
    console.log(result);
    return result
  }catch(error){
    return rejectWithValue(error)
  }
})

const initialState = {
  value:0,
  employee:[],
  loading: false,
  error: null
}

const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers: {
    increment : (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset : (state) => {
      state.value = 0
    }
  },
  extraReducers(builder){
    builder
    .addCase(getEmployee.pending,(state,action)=>{    //todo : getEmployee - pending
      state.loading = true
    })
    .addCase(getEmployee.fulfilled,(state,action)=>{  //todo : getEmployee - fullfiled
      state.loading = false
      state.employee = action.payload
    })
    .addCase(getEmployee.rejected,(state,action)=>{   //todo : getEmployee - rejected
      state.loading = false
      state.error = action.payload
    })
  }
})

export default counterSlice.reducer
export const { increment, decrement, reset } = counterSlice.actions