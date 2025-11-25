import { useRef, useState } from 'react'
import DisplayInputs from "./DisplayInputs"
import './otp.css'

const MainOtp = () => {
  const[inputVal, setInputVal] = useState({
    inp1:'',
    inp2:'',
    inp3:'',
    inp4:'',
    inp5:'',
  })

  const input1 = useRef(null)
  const input2 = useRef(null)
  const input3 = useRef(null)
  const input4 = useRef(null)
  const input5 = useRef(null)

  function handleInputVal(e, nextRef){
    console.log(nextRef)
    const{name, value} = e.target
    setInputVal((prev)=>({ ...prev, [name]: !isNaN(value) ? value.slice(value.length-1) : '' }))
    if(value && value.trim() !== "" && !isNaN(value)) nextRef.current.focus()
  }

  function handlePress(e){
    console.log(e.key)
  }

  console.log(input1)

  return (
    <div className="maindiv" >
      <div>
        <h1>Let's Build the OTP input forms</h1>
        <DisplayInputs inputVal={inputVal} handleInputVal={handleInputVal} input1={input1} input2={input2}
        input3={input3} input4={input4} input5={input5}
        />
      </div>
    </div>
  )
}

export default MainOtp
