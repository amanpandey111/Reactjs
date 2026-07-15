// import { useState } from 'react';

// function ThrottleExample() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     // Yeh normal function hai, har click par turant chalega
//     setCount((prev) => prev + 1);
//     console.log("Button Clicked!");
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Throttling Demo</h2>
//       <p>Score: {count}</p>
//       <button
//         onClick={handleClick}
//         className="border-2 px-3 py-1 rounded-2xl cursor-pointer"
//       >
//         Click Me Fast!
//       </button>
//     </div>
//   );
// }

// export default ThrottleExample;

import { useState, useRef, useEffect } from 'react';

function ThrottleExample() {
  const [count, setCount] = useState(0);
  const isThrottled = useRef(false);
  
  // 1. Ek aur ref banayein jo timer ki ID ko store karega
  const timeoutId = useRef(null);

  const handleThrottledClick = () => {
    if (isThrottled.current) return;

    setCount((prev) => prev + 1);
    console.log("Throttled Action Executed!");

    isThrottled.current = true;

    // 2. setTimeout ki ID ko ref me save karein
    timeoutId.current = setTimeout(() => {
      isThrottled.current = false;
      timeoutId.current = null; // Timer chal gaya, to ID clear kar do
    }, 2000);
  };

  // 3. CLEANUP: Agar user page chhod kar jaye (component unmount ho), 
  // to timer ko delete/clear kar do taaki memory leak na ho.
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        console.log("Safely cleared timer on unmount!");
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Throttling Demo (With Safe Cleanup)</h2>
      <p>Score: {count}</p>
      <button
        onClick={handleThrottledClick}
        className="border-2 px-3 py-1 rounded-2xl cursor-pointer bg-blue-500 text-white"
      >
        Click Me Fast!
      </button>
    </div>
  );
}

export default ThrottleExample;
