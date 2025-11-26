// import { useEffect, useRef, useState } from 'react'

// const StaleClosure = () => {
//   const [count, setCount] = useState(0);

//   const start = () => {
//     setTimeout(() => {
//       console.log("Count after 3 sec:", count);
//     }, 3000);
//   };
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>+1</button>
//       <button onClick={start}>Start Timer</button>
//     </div>
//   )
// }

// export default StaleClosure


// export function Example() {
//   const [count, setCount] = useState(0);
//   const latestCount = useRef(count);

//   useEffect(() => {
//     latestCount.current = count;
//   }, [count]);

//   const start = () => {
//     setTimeout(() => {
//       console.log("Count after 3 sec:", latestCount.current);
//     }, 3000);
//   };

//   return (
//     <>
//       <button onClick={() => setCount(c => c + 1)}>+1</button>
//       <button onClick={start}>Start Timer</button>
//     </>
//   );
// }


import { useEffect, useRef, useState } from 'react';

// ------------------------------------------------------------------
// 🛑 Component 1: THE STALE CLOSURE PROBLEM
// ------------------------------------------------------------------
const StaleTimer = () => {
    const [count, setCount] = useState(0);

    const startTimer = () => {
        setTimeout(() => {
            // This 'count' variable is locked (stale) to the value 
            // it had when this specific 'startTimer' function was created.
            console.log("Stale Timer Output (3s delay):", count);
        }, 3000);
    };

    return (
        <div style={{ border: '2px solid red', padding: '15px', margin: '10px' }}>
            <h3>🛑 Stale Timer (Original Code)</h3>
            <p>Current Count: <strong>{count}</strong></p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={startTimer}>Start Stale Timer</button>
            <p>Prints the count from when the timer **started**.</p>
        </div>
    );
};


// ------------------------------------------------------------------
// ✅ Component 2: THE FRESH STATE SOLUTION (Using useRef)
// ------------------------------------------------------------------
const FreshTimer = () => {
    const [count, setCount] = useState(0);
    // 1. Create a persistent object (the ref)
    const latestCountRef = useRef(count); 

    // 2. Update the ref's .current property whenever 'count' changes.
    // This makes the ref ALWAYS hold the latest state value.
    useEffect(() => {
        latestCountRef.current = count;
    }, [count]);

    const startTimer = () => {
        setTimeout(() => {
            // 3. Access the latest value via the ref's .current property.
            // This property is mutable, so its value is FRESH.
            console.log("Fresh Timer Output (3s delay):", latestCountRef.current); 
        }, 3000);
    };

    return (
        <div style={{ border: '2px solid green', padding: '15px', margin: '10px' }}>
            <h3>✅ Fresh Timer (useRef Solution)</h3>
            <p>Current Count: <strong>{count}</strong></p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={startTimer}>Start Fresh Timer</button>
            <p>Prints the count from when the timer **finished**.</p>
        </div>
    );
};


export default function TimerTest() {
    return (
        <>
            <h1>Compare Stale vs. Fresh State</h1>
            <p>Open your browser console to see the output difference after testing.</p>
            <StaleTimer />
            <FreshTimer />
        </>
    );
}

// NOTE: You would export TimerTest instead of StaleClosure or Example.