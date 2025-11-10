import "./mainchip.css"
import { useDispatch, useSelector } from "react-redux"
import { RxCross1 } from "react-icons/rx";
import { addChip, deleteChip, handleInput } from "./rtk/reducer";
import { useState } from "react";

function MainChip() {
  const myRtk = useSelector((state) => state.chipSlice)
  const dispatch = useDispatch()
  // dispatch(handleInput("aman"))
  const { chips, inputText } = myRtk
  // console.log(chips, inputText)

  function handleInputChange(e){
    // console.log(e.target.value)
    dispatch(handleInput(e.target.value))
  }

  function handleSubmit(e){
    dispatch(addChip(inputText))
  }

  function handleDelete(id){
    console.log(id)
    dispatch(deleteChip(id))
  }

  function handleKeyDown(e){
    if(e.key=='Enter' && inputText.trim() !== "" ){
      dispatch(addChip(inputText))
    }
  }
  return <section className="mainchip" >
    <div>
      <div>
        <h1>Chip Creator</h1>
        <p>Add your tags and watch the magic happen</p>
      </div>
      <div className="chiplist" >
        <div className="inputbutton" >
          <input type="text" name="inputText1" value={inputText} onChange={handleInputChange} onKeyDown = {handleKeyDown} placeholder="Enter Chip Name" />
          {/* <button disabled={inputText.trim().length<1} onClick={handleSubmit}>+ Add</button> */}
        </div>
        <div className="chipcontainer" >
          {
            chips?.map((chip) => {
              return <div className="chiponediv" >
                <div>
                  <p>{chip.name}</p>
                </div>
                <div>
                  <button onClick={()=>handleDelete(chip.id)}
                  style={{ backgroundColor: "transparent", border: "none", color: "red", fontWeight: 600, cursor: "pointer"}}
                  > <RxCross1 fontWeight={600} /> </button>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div></div>
    </div>
  </section>
}

export default MainChip