// src/PrimeCalculator.js
import React, { useState, useEffect } from 'react';

// Using a bundler like Vite or Create React App, you can import the worker script directly.
// In this case, 'new Worker(new URL(...))' is the standard way.
// With Create React App, it might be 'new Worker('./worker.js')'
const worker = new Worker(new URL('./worker.js', import.meta.url));

function PrimeCalculator() {
  const [primes, setPrimes] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Listen for messages from the worker
    worker.onmessage = (event) => {
      setPrimes(event.data);
      setIsCalculating(false);
    };

    // Clean up the worker when the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  const startCalculation = () => {
    setIsCalculating(true);
    // Send a message to the worker to start the calculation
    worker.postMessage(20); // Calculate primes up to 200,000
  };

  return (
    <div>
      <h1>Prime Number Calculator with Web Worker</h1>
      <button onClick={startCalculation} disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Start Calculation'}
      </button>
      <p>Click the button to find all prime numbers up to 200,000.</p>
      
      {primes.length > 0 && (
        <>
          <h3>Found {primes.length} prime numbers:</h3>
          <ul style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
            {primes.map(prime => <li key={prime}>{prime}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

export default PrimeCalculator;