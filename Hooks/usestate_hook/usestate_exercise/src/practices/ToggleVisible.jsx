import { useState } from "react"

function ToggleVisible(){
  const[isToggle, setIsToggle] = useState(false)
  return <div>
    <button onClick={()=>setIsToggle((prev)=>!prev)} >Toggle Text</button>
    {isToggle && <p>I am The Text To Be Toggled</p>}
  </div>
}

export default ToggleVisible