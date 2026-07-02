import React, { useEffect, useState } from 'react'
// let obj = { name: 'aman pandey' } // if we written obj outside the component then it's reference stays same and it won't trigger useEffect

const Preactice = () => {
  const [state, setSate] = useState(0)
  let obj = { name: 'aman pandey' }  // as the state changes the component render and it leads to change in reference and it will effect useEffect
  useEffect(() => {
    console.log('Effect changed')
  }, [obj])
  return (
    <div>
      <h2>Learning useEffect</h2>
      <p>The Count is {state}</p>
      <button onClick={() => setSate((prev) => prev+1)} >Increment</button>
    </div>
  )
}

export default Preactice