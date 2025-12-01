import { useState, useEffect, useRef } from 'react';

export default function FixedCounter() {
  // 1. State variable (drives the UI re-render)
  const [count, setCount] = useState(0);

  // 2. The Fix: Create a Ref (the mutable box)
  const latestCountRef = useRef(count);

  // Function to manually update the count state
  const handleClick = () => {
    setCount(count + 1);
  };

  // 3. The Update: Synchronize the Ref on *every* render
  //    This runs *after* every render where 'count' has changed.
  useEffect(() => {
    // Update the .current property of the Ref object.
    // This is the only place we update the ref. NO re-render occurs here.
    latestCountRef.current = count;
  }, [count]); // Dependency array: runs whenever 'count' changes.

  // 4. The Setup: setInterval runs only once
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 5. The Solution: Read from the Ref's .current property.
      //    The interval function closed over the *Ref object*, which is stable.
      //    We read the *latest* value from the object's mutable property.
      const latestCount = latestCountRef.current;
      
      console.log('Interval Tick (Latest):', latestCount);
      setCount(latestCount + 1); // Correctly updates state based on the latest value
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array: runs only once.

  return (
    <div>
      <h3>Fixed Counter with useRef</h3>
      <p>Current Count: **{count}**</p>
      <p>Click the button to see the interval correctly follow your clicks.</p>
      <button onClick={handleClick}>
        Manual Increment
      </button>
    </div>
  );
}