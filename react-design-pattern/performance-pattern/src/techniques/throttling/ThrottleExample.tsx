import { useState } from 'react';

function ThrottleExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Yeh normal function hai, har click par turant chalega
    setCount((prev) => prev + 1);
    console.log("Button Clicked!");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Throttling Demo</h2>
      <p>Score: {count}</p>
      <button onClick={handleClick}>Click Me Fast!</button>
    </div>
  );
}

export default ThrottleExample;
