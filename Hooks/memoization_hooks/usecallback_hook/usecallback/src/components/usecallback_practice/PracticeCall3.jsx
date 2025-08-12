import React, { useState, useCallback } from 'react';

function PracticeCall3() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // The 'increment' function depends on 'step'
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + step);
    console.log(`Incremented by ${step}`);
  }, [step]); // Dependency array: [step]

  console.log('ParentComponent rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={() => setStep(prevStep => prevStep + 1)}>
        Change Step ({step})
      </button>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default PracticeCall3;