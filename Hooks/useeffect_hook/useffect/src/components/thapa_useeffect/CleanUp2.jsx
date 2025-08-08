import React, { useEffect, useState } from 'react'

const CleanUp2 = () => {
    const[widthCount,setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
        // console.log("hgh");
        window.addEventListener("resize",actualWidth)
        return () => {
            console.log("remove event");
            window.removeEventListener("resize",actualWidth)
        }
    })
  return (
    <div>
        <h2>The Actual size of the window is :</h2>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default CleanUp2