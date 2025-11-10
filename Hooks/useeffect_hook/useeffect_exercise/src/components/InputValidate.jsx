import { useEffect, useState } from "react"

function InputValidate(){
  const[value, setValue] = useState("")
  const[inputError, setInputError] = useState("")
  useEffect(()=>{
    console.log("Hello World",value)
    if(value.length < 5){
      setInputError("The Value of Input Should be minimum 5")
    }else{
      setInputError("")
    }
  },[value])
  return(
    <div>
      <h1>Let's Validate the Input Of the Form</h1>
      <form>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        { inputError && <p>{inputError}</p> }
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default InputValidate