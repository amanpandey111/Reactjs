// import { useEffect, useRef, useState } from "react";

// function MouseTracker({ render }) {
//     // console.log('Hello'); //! This executes because state changes
//     const [pos, setPos] = useState({ x: 0, y: 0 })
//     const prevRenderRef = useRef();

//     useEffect(() => {
//         if (prevRenderRef.current) {
//             console.log(
//                 "Is same function?",
//                 prevRenderRef.current === render
//             );
//         }
//         prevRenderRef.current = render;
//     });

//     function handleMouseMove(e) {
//         setPos({ x: e.screenX, y: e.screenY })
//     }
//     return (
//         <div
//             className="border w-full h-70 border-green-500"
//             onMouseMove={handleMouseMove}
//         >
//             {render(pos)}
//         </div>
//     )
// }

// export default MouseTracker;

//todo this is to overcome the performace issue
import React, { useEffect, useRef, useState } from "react";

const MouseTracker = React.memo(({ render }) => {
    // console.log('Hello'); //! This executes because state changes
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const prevRenderRef = useRef();

    useEffect(() => {
        if (prevRenderRef.current) {
            console.log(
                "Is same function?",
                prevRenderRef.current === render
            );
        }
        prevRenderRef.current = render;
    });

    function handleMouseMove(e) {
        setPos({ x: e.screenX, y: e.screenY })
    }
    return (
        <div
            className="border w-full h-70 border-green-500"
            onMouseMove={handleMouseMove}
        >
            {render(pos)}
        </div>
    )
})

export default MouseTracker;
