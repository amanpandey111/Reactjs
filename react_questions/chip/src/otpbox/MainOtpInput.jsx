import { useEffect, useRef, useState } from 'react'
import './mainotpinput.css'

const otp_digit_count = 5

const MainOtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(otp_digit_count).fill(""))
  const refArr = useRef([])

  function handleKeyDown(e, index) {
    console.log(index)
    if( !e.target.value && e.key=="Backspace" ){
      refArr.current[index-1]?.focus()
    }
  }

  function handleOnChange(val, index){
    if(isNaN(val)) return
    let newVal = val.trim()
    let newArr = [...inputArr]
    newArr[index] = newVal.slice(-1)
    setInputArr(newArr)
    newVal && refArr.current[index+1].focus()
  }

  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])

  return (
    <div className='mainotpinput' >
      <h1>Validate Input OTP</h1>
      <div className='inputdiv' >
        {
          inputArr.map((curEle, index) => {
            return <input key={index} type="text" value={inputArr[index]} onChange={(e)=>handleOnChange(e.target.value, index)}
            ref={(input)=> (refArr.current[index] = input) }
            onKeyDown={(e)=>handleKeyDown(e,index)}
            />
          })
        }
      </div>
    </div>
  )
}

export default MainOtpInput