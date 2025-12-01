import { useState, useRef } from 'react'

function UserefTimer() {
  const [timer, setTimer] = useState(0)
  const timeRef = useRef(null)

  function startTimer() {
    if (timeRef.current == null) {
      timeRef.current = setInterval(function () {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
  }

  function stopTimer() {
    clearInterval(timeRef.current)
    timeRef.current = null
  }

  function resetInterval() {
    stopTimer();
    setTimer(0)
  }
  return (
    <div>
      <h1>Let's Build useRef Timer</h1>
      <p>Timer : {timer}</p>
      <button onClick={startTimer} >start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetInterval} >Reset Timer</button>
    </div>
  )
}
export default UserefTimer;