import { useState, useEffect } from "react"

const WindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  
  useEffect(()=>{
    console.log("In useEffect")
    function handleResize(){
      console.log("Inside handleResize")
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize)
    return () => window.removeEventListener("resize",handleResize)
  },[])

  console.log(windowWidth)

  return (
    <div>WindowResize width is {windowWidth} and Height is {windowHeight} </div>
  )
}

export default WindowResize