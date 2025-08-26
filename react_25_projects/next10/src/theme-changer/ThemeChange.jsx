// import React, { useState } from 'react'

// const ThemeChange = () => {
//   const { theme, changeTheme } = useCustom()
//   const bgColor = theme == "light" ? "bg-[white]" : "bg-[gray]"
//   const textColor = theme == "light" ? "text-[gray]" : "text-[white]"
//   return (
//     <div className={`border-2 h-screen ${bgColor} ${textColor}`} >
//       <button className='border-2 cursor-pointer' onClick={changeTheme} >change theme</button>
//     </div>
//   )
// }

// export default ThemeChange


// function useCustom(){
//   const[theme, setTheme] = useState("light")
//   const changeTheme = () => setTheme((prev)=> prev=="light" ? "dark" : "light" ) 
//   return { theme, changeTheme }
// }


import React, { useState } from 'react'

const ThemeChange = () => {
  const { theme, changeTheme } = useCustom()
  const bgColor = theme == "light" ? "bg-[white]" : "bg-[gray]"
  const textColor = theme == "light" ? "text-[gray]" : "text-[white]"
  return (
    <div 
    style={{
      backgroundColor: theme=="light" ? "#f8f8f8" : '#1a202c',
      color: theme=="light" ? "#1a202c" : "#f8f8f8",
      height:"100vh"
    }}
    >
      <button className='border-2 cursor-pointer' onClick={changeTheme} >change theme</button>
    </div>
  )
}

export default ThemeChange


function useCustom(){
  const[theme, setTheme] = useState("light")
  const changeTheme = () => setTheme((prev)=> prev=="light" ? "dark" : "light" ) 
  return { theme, changeTheme }
}