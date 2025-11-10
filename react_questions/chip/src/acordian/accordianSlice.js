import { createSlice } from "@reduxjs/toolkit"
let initialState = {
  id:""
}

const accordianSlice = createSlice({
  name:"accordian",
  initialState,
  reducers:{
    setAccordian:(state,id)=>{
      state.id = id.payload == state.id ? "" : id.payload
    }
  }
})

export default accordianSlice.reducer
export const { setAccordian } = accordianSlice.actions