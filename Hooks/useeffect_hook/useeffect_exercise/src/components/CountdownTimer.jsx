import { useEffect, useState } from "react"

function CountdownTimer() {
  const [timer, setTimer] = useState(0)
  const [runEffect, setRunEffect] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setRunEffect(true)
  }

  useEffect(() => {
    if (!runEffect) return;

    const myTimer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(myTimer);
          setRunEffect(false);
          console.log("Timer finished!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // cleanup function
    // return () => clearInterval(myTimer);
  }, [runEffect]);

  console.log(runEffect)

  return (
    <div>
      <h2>Let's Build The COuntDown Timer Now.</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Enter The Timer value u want to start" value={timer} onChange={(e) => setTimer(e.target.value)} />
          <button type="submit" >Start</button>
        </form>
        <h2>Click Start button to start the timer from {timer} </h2>
      </div>
    </div>
  )
}

export default CountdownTimer