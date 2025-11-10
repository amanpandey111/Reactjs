import { useState } from "react"

function DropDown(){
  const[selectedColor, setSelectedColor] = useState("red")

  function handleDropDown(e){
    console.log("drop down changed",e.target.value)
    setSelectedColor(e.target.value)
  }

  return <div style={{ border:"2px solid red", height:120, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:selectedColor }} >
    <select value={selectedColor} onChange={(e)=>handleDropDown(e)} >
      <option value="red" >Red</option>
      <option value="blue" >Blue</option>
      <option value="green" >Green</option>
      <option value="orange" >Orange</option>
      <option value="yellow" >Yellow</option>
    </select>
  </div>
}

export default DropDown