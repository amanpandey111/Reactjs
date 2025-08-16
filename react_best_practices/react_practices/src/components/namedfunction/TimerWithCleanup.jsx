import React, { useEffect, useState } from 'react';

function TimerWithCleanup() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Timer Component
      </button>
      {show && <Timer />}
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
      console.log("⏱️ Timer running...");
    }, 1000);
    return () => {
        console.log("🧹 Cleaning up...");
        clearInterval(interval);
    };
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

export default TimerWithCleanup;