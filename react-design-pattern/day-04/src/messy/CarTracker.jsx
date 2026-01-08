import { useState } from "react"

function CarTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  function handleMouseMOve(e){
    setPos({x: e.clientX, y: e.clientY})
  }
  return (
    <div onMouseMove={handleMouseMOve} 
    className="border p-2 w-full h-48 my-2"
    >
      <p>
        🚗 Car is At ({pos.x}, {pos.y});
      </p>
    </div>
  )
}
export default CarTracker