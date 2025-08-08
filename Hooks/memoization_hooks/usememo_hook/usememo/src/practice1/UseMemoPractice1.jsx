import React, { useState, useMemo } from 'react';

// --- Parent Component ---
const UseMemoPractice1 = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  console.log('Parent: UseMemoPractice1 re-rendered.');

  const calculateExpensiveValueWithoutMemo = () => {
    console.log('  --- Running expensive calculation WITHOUT memo ---');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum + count;
  };
  const resultWithoutMemo = calculateExpensiveValueWithoutMemo(); // Called on every render


  const resultWithMemo = useMemo(() => {
    console.log('  --- Running expensive calculation WITH memo (only when count changes) ---');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) { // Simulate a very long calculation
      sum += i;
    }
    return sum + count; // Dependency: count
  }, [count]); // Dependencies array: [count]


  const complexResultWithMemo = useMemo(() => {
    console.log('  --- Running complex calculation WITH memo (count OR multiplier changes) ---');
    let product = 1;
    for (let i = 1; i <= 1000; i++) { // Shorter loop for quicker demo
      product += i;
    }
    console.log(product,count,multiplier);
    return (product % 1000) * count * multiplier; // Dependencies: count, multiplier
  }, [count, multiplier]); // Dependencies array: [count, multiplier]


  return (
    <div style={{ border: '2px solid #0056b3', padding: '20px', margin: '20px', background: '#f0f8ff' }}>
      <h2>UseMemo Practice: Expensive Calculations</h2>
      <p>Parent Count: {count}</p>
      <p>Multiplier: {multiplier}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(prev => prev + 1)}>Increment Multiplier</button>
      <button onClick={() => console.log('Just a parent re-render (no state change)')}>Force Parent Re-render (No State Change)</button> {/* Won't change state but triggers parent render */}

      <hr />

      {/* Child for calculation WITHOUT useMemo */}
      <DisplayResult label="Result WITHOUT Memo" result={resultWithoutMemo} />

      {/* Child for calculation WITH useMemo (dependency: count) */}
      <DisplayResult label="Result WITH Memo (Count Dep)" result={resultWithMemo} />

      {/* Child for calculation WITH useMemo (dependencies: count, multiplier) */}
      <DisplayResult label="Result WITH Memo (Count & Multiplier Dep)" result={complexResultWithMemo} />
    </div>
  );
};

export default UseMemoPractice1;

const DisplayResult = React.memo(({ result, label }) => {
  console.log(`DisplayResult (${label}): 🚀 Re-rendered!`);
  return (
    <div style={{ border: '1px solid #007bff', padding: '10px', margin: '10px', background: '#eaf4ff' }}>
      <h4>{label}</h4>
      <p>Calculation Result: {result}</p>
    </div>
  );
});