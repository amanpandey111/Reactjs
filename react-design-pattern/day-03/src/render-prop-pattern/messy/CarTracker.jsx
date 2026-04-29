import { useState } from "react";

function CarTracker(){
    const [pos, setPos] = useState({x: 0, y: 0});
    const handleMouseMove = (e) => {
        setPos({x: e.screenX, y: e.screenY});
    }
    return (
        <div
        onMouseMove={handleMouseMove}
        className="border w-full h-70 border-red-600"
        >
            <p>
                🚗 car is At {pos.x} - {pos.y}
            </p>
        </div>
    )
}

export default CarTracker;
