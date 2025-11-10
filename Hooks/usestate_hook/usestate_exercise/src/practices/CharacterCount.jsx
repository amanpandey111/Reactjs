import { useState } from "react"

function CharacterCount(){
  const[inputString, setInputString] = useState({
    strVal:"",
    strLength:0
  })
  function handleInputChange(e){
    setInputString({
      strVal:e.target.value,
      strLength:e.target.value.length
    })
  }
  return <div>
    <input placeholder="Type charcter" name="strVal" onChange={(e)=>handleInputChange(e)} />
    <p>Character Count is {inputString.strLength}</p>
  </div>
}

export default CharacterCount