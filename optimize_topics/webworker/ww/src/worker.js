// src/worker.js

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

self.onmessage = function(event) {
  const numberToCalculate = event.data;
  const primes = [];
  for (let i = 2; i <= numberToCalculate; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  // Send the result back to the main thread
  self.postMessage(primes);
};