import { useState, useMemo, useCallback } from 'react'

const MemoOne = () => {
  const [count, setCount] = useState(0)

  function expensiceCalci() {
    let total = 0;
    console.log("calculation Started")
    for (let i = 0; i < 1000009990; i++) {
      total += i
    }
    console.log("claculation Ended")
    return total
  }

  //todo : With useMemo()
  let myVal = useCallback(() => {
    let total = 0;
    console.log("calculation Started")
    for (let i = 0; i < 1000009990; i++) {
      total += i
    }
    console.log("claculation Ended")
    return total
  }, [])

  // let myVal = useMemo(()=>{
  //   return expensiceCalci()
  // },[])

  //todo : without useMemo()
  // let myVal = expensiceCalci()

  console.log(myVal)
  return (
    <div>
      <p>The Count is : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} >Increment</button>
    </div>
  )
}

export default MemoOne