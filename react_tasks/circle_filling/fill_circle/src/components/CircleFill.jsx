import { useState } from "react";

function CircleFill() {
  const [value, setValue] = useState(0); // Initial progress value

  const radius = 50; 
  const circumference = 2 * Math.PI * radius; // Formula for circumference: 2πr
  const strokeOffset = circumference - (value / 100) * circumference; // Filling effect

  return (
    <div className="flex flex-col items-center p-4">
      <svg width="150" height="150">
        {/* Background Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#ddd"
          strokeWidth="20"
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="blue"
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
        //   strokeLinecap="round"
          transform="rotate(-90 75 75)" // Rotate to start from top
        />
      </svg>

      {/* Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Progress: {value}%</p>
    </div>
  );
}

export default CircleFill;
