import React, { useEffect, useRef } from 'react'

const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);

  // Update the callback ref without restarting the timer
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Reset timer only when delay changes
  useEffect(() => {
    if (delay === null || delay === undefined) return;

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => clearTimeout(id); // cleanup
  }, [delay]);
};

const SetTimeout = () => {

  useTimeout(() => {
    console.log("Timeout fired!");
  }, 2000);

  return (
    <div>SetTimeout Component</div>
  )
}

export default SetTimeout;
