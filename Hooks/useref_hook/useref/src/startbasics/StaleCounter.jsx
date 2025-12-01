import React, { useState, useEffect } from 'react';

function StaleCounter() {
  // 1. State variable
  const [count, setCount] = useState(0);

  // Function to manually update the count state
  const handleClick = () => {
    setCount(count + 1);
  };

  // 2. The Setup: setInterval runs only once (due to [])
  useEffect(() => {
    // This is the function passed to setInterval.
    const intervalId = setInterval(() => {
      // 3. The Problem: This closure captures the 'count' value
      //    from the *first render* (when count was 0).
      //    It will *always* see count as 0, no matter how many times
      //    we click the button or the state updates.
      console.log('Interval Tick (Stale):', count); 
      setCount(count + 1); // This line is also stale! It always does 0 + 1 = 1.
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once.

  return (
    <div>
      <h3>Stale Closure Counter</h3>
      <p>Current Count: **{count}**</p>
      <p>Click the button to try and change the interval's internal value.</p>
      <button onClick={handleClick}>
        Manual Increment
      </button>
    </div>
  );
}

export default StaleCounter