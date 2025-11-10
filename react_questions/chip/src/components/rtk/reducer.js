import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  inputText:"",
  chips:[]
}
const chipSlice = createSlice({
  name:"chipList",
  initialState,
  reducers: {
    addChip:(state,chip)=>{
      // console.log(state.chips,chip.payload)
      state.chips.push({
        id:Date.now(),
        name:chip.payload
      })
      state.inputText = ""
    },
    deleteChip:(state,id)=>{
      state.chips = state.chips.filter((chip)=>chip.id !== id.payload)
    },
    handleInput:(state,text)=>{
      state.inputText = text.payload
    }
  }
})

export default chipSlice.reducer
export const { addChip, deleteChip, handleInput } = chipSlice.actions