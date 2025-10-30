import { useEffect, useLayoutEffect, useState } from "react"

const ColorChange = () => {
  const [color, setColor] = useState("red")
  // useEffect(()=>{
  //     setColor("green")
  // },[])

  useLayoutEffect(() => {
    setColor("green")
  }, [])

  return (
    <div>
      <h1 style={{
        backgroundColor: color
      }} >ColorChange</h1>
    </div>
  )
}

export default ColorChange