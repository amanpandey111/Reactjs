import React, { useEffect, useRef, useState } from 'react'

const Otp = ({ optLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(optLength).fill(""))
  const [focusIndex, setFocusIndex] = useState(0)
  const ref = useRef([])

  function handleKeyDown(e, index) {
    const key = e.key;

    if (key == "Backspace") {
      let update = [...otpFields]
      update[index] = ""
      setOtpFields(update)
      if (index !== 0) ref.current[index - 1].focus()
      return
    } else if (key == "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus()
      return
    } else if (key == "ArrowRight") {
      console.log(index,otpFields.length)
      if (index+1 < otpFields .length) ref.current[index + 1].focus()
    }

    if (isNaN(key)) return;

    let update = [...otpFields]
    update[index] = key
    if (index < otpFields.length-1) ref.current[index + 1].focus();
    setOtpFields(update)
  }

  useEffect(() => {
    ref.current[0].focus()
  }, [])

  return (
    <div>
      {
        otpFields.map((value, index) => {
          return <input
            key={index}
            type="text"
            ref={(currentRef) => ref.current[index] = currentRef}
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={()=>{}}
            onFocus={()=>setFocusIndex(index)}
            className={focusIndex==index ? 'focusInput' : 'normal'}
          />
        })
      }
    </div>
  )
}

export default Otp