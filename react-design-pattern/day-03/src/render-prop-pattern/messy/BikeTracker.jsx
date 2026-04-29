import { useState } from "react"

function BikeTracker(){
    const [pos, setPos] = useState({x: 0, y: 0});
    const handleMouseMove=(e)=>{
        setPos({x: e.screenX, y: e.screenY})
    }
    return(
        <div
        className="border w-full h-70 border-green-600"
        onMouseMove={handleMouseMove}
        >
            <p>🚴🏻 Bike is At {pos.x} - {pos.y}</p>
        </div>
    )
}

export default BikeTracker;
