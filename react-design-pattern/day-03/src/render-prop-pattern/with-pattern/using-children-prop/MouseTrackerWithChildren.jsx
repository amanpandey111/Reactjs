import { useState } from "react";

function MouseTrackerWithChildren({children}){
    console.log('Hello');
    const [pos, setPos] = useState({x: 0, y: 0})
    function handleMouseMove(e){
        setPos({x: e.screenX, y: e.screenY})
    }
    return(
        <div
          className="border w-full h-70 border-green-500"
          onMouseMove={handleMouseMove}
        >
            {children(pos)}
        </div>
    )
}

export default MouseTrackerWithChildren;
