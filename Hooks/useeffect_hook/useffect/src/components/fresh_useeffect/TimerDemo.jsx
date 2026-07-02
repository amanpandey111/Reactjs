import { useEffect, useState } from "react";

export default function TimerDemo() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

function Timer() {
  useEffect(() => {
    console.log("✅ Timer component mounted");

    setInterval(() => {
      console.log("⏰ Tick...");
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Timer Component</h2>
      <p>Open the browser console.</p>
    </div>
  );
}