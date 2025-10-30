import { useLayoutEffect, useRef, useState, useEffect } from "react"

const MeasuringElement = () => {
  const boxRef = useRef(null)
  const [height, setHeight] = useState(100)
  const [bgColor, setbgColor] = useState("skyblue")

  useLayoutEffect(() => {
  // useEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    console.log("Before:", rect.height);
    if (rect.height < 150) {
      setbgColor("red")
      setHeight(200); // This will trigger re-render and change layout
    }
    setTimeout(() => {
      if (rect.height < 150) {
        setbgColor("green");
        setHeight(200);
      }
    }, 1000); // delay by 1 second
  }, []);

  return (
    <div ref={boxRef} style={{
      backgroundColor: bgColor,
      width: "200px",
      height: height,
      margin: "20px",
      transition: "all 0.6s ease"
    }} >
      <h2>Let's Measure Using useLayoutEffect</h2>
      <h3>Box Height is : {height}</h3>
    </div>
  )
}

export default MeasuringElement
