import React from 'react'

const FourthComponent = ({data,count,handleIncrement}) => {
  return (
    <div>
        <h2>Fourth Component</h2>
        <h3>Data From Third Component : {data}</h3>
        <p>{count}</p>
        <button onClick={handleIncrement} >Increment</button>
    </div>
  )
}

export default FourthComponent