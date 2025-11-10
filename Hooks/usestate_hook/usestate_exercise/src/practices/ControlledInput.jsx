import { useState } from "react"

function ControlledInput(){
  const [inputVal, setInputVal] = useState("")
  console.log(inputVal)
  return(
    <div>
      <form>
        <input type="text" placeholder="Enter Your Name" name="name" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
      </form>
    </div>
  )
}

export default ControlledInput