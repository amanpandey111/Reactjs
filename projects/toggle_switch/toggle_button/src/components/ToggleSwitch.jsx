import React, { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  let[isOn,setIsOn] = useState(false)
  function handleToggleSwitch(){
    setIsOn(!isOn)
  }
  return (
    <div 
    style={{backgroundColor:isOn?"black":"red"}}
    className='toggle-switch' onClick={handleToggleSwitch}>
      <div className={`switch ${isOn?"on":"off"}`}>
        <div className="switch-state">{isOn?"ON":"OFF"}</div>
      </div>
    </div>
  )
}

export default ToggleSwitch
