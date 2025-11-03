import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//! Get The Employee Detail
export const getEmployee = createAsyncThunk("getEmployee", async (arg, { rejectWithValue }) => {
  const response = await fetch("http://localhost:3000/employees")
  try {
    const result = await response.json()
    return result
  } catch (error) {
    return rejectWithValue(error)
  }
})

//! Delete method
export const deleteEmployee = createAsyncThunk("deleteEmployee", async (id, { rejectWithValue }) => {
  console.log(id);
  const response = await fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE"
  })
  try {
    const result = await response.json()
    console.log(result);
    return result
  } catch (error) {
    return rejectWithValue(error)
  }
})

//! POST Method : To add the data
export const addData = createAsyncThunk('addData', async (data, { rejectWithValue }) => {
  const response = await fetch("http://localhost:3000/employees/", {
    method: "POST",
    body: JSON.stringify(data)
  })
  console.log(response)
  try {
    const result = await response.json()
    return result
  } catch (error) {
    return rejectWithValue(error)
  }
})

//! PUT Method : To update the data
export const updateData = createAsyncThunk("updateDataEmployee", async(data,{rejectWithValue})=>{
  console.log("Hey Let's Update the data",data)
  const response = await fetch(`http://localhost:3000/employees/${data.id}`,{
    method: "PUT",
    body: JSON.stringify(data)
  })
  try{
    const result = await response.json()
    return result
  }catch(error){
    return rejectWithValue(error)
  }
})

const initialState = {
  value: 0,
  employee: [],
  loading: false,
  error: null
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getEmployee.pending, (state, action) => {    //todo : getEmployee - pending
        state.loading = true
      })
      .addCase(getEmployee.fulfilled, (state, action) => {  //todo : getEmployee - fullfiled
        state.loading = false
        state.employee = action.payload
      })
      .addCase(getEmployee.rejected, (state, action) => {   //todo : getEmployee - rejected
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteEmployee.pending, (state, action) => {  //! deleting an employee
        state.loading = true
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => { //! deleting an employee
        state.employee = state.employee.filter((curEle) => curEle.id !== action.payload.id)
      })
      .addCase(deleteEmployee.rejected, (state, action) => {   //! deleting an employee
        state.loading = false
        state.error = action.payload
      })
      .addCase(addData.pending,(state,action)=>{               //todo : adding a employee(POST)
        state.loading = true
      })
      .addCase(addData.fulfilled,(state,action)=>{             //todo : adding a employee(POST)
        state.employee.push(action.payload)
      })
      .addCase(addData.rejected,(state,action)=>{             //todo : adding a employee(POST)
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateData.pending,(state,action)=>{
        state.loading = true
      })
      .addCase(updateData.fulfilled,(state,action)=>{
        state.employee = state.employee.map((curEmp)=>curEmp.id==action.payload.id ? action.payload : curEmp)
      })
  }
})

export default counterSlice.reducer
export const { increment, decrement, reset } = counterSlice.actions