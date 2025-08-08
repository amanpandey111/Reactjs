import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'

const FirstComponent = () => {
    const{theme,setThemeDark} = useContext(themeContext)
    console.log(theme);
  return (
    <>
      <h1>Change the Theme</h1>
      <button onClick={setThemeDark} >change theme</button>
    </>
  )
}

export default FirstComponent