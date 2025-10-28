import React, { useEffect, useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    console.log("useEffectCode");
    const handleStorage = () => {
      console.log("Event Listener");
      const updatedCount = JSON.parse(localStorage.getItem("cart")) || 0;
      setCount(updatedCount);
    };

    window.addEventListener("storage", handleStorage);

    const initialCount = JSON.parse(localStorage.getItem("cart")) || 0;
    setCount(initialCount);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <button onClick={handleCount}>Add to cart</button>
        </div>
        <div>
          <button onClick={handleCount}>Add to cart</button>
        </div>
        <div>
          <button onClick={handleCount}>Add to cart</button>
        </div>
      </div>
      <div>
        <p>The cart Items are: {count}</p>
      </div>
    </div>
  );
};

export default TestComponent;
