import React, { useState, useCallback } from 'react';

function PracticeCall3() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + step);
    console.log(`Incremented by ${step}`);
  });

  console.log('ParentComponent rendered');

  return (
    <div 
    style={{ border:"3px solid yellow", width:"40%", padding:"20px", display:"flex", flexDirection:"column", alignItems:"center", 
    justifyContent:"center", backgroundColor:"red", margin:"auto", color:"white", fontWeight:"600", gap:"5px" }} >
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={() => setStep(prevStep => prevStep + 1)} 
      style={{ border:"2px solid black", padding:"5px", backgroundColor:"ButtonHighlight", color:"black" }}
      >
        Change Step ({step})
      </button>
      {/* <br /> */}
      <button onClick={increment} style={{ border:"2px solid black", padding:"5px", backgroundColor:"ActiveBorder" }} >
        Increment
      </button>
    </div>
  );
}

export default PracticeCall3;