import React from 'react'
import FourthComponent from './FourthComponent'

const ThirdComponent = ({data,count,handleIncrement}) => {
  return (
    <div>
        <h2>Third Component</h2>
        <h3>Data From Second Component : {data}</h3>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <br /><br />
        <hr />
        <hr />
        <FourthComponent data={data} count={count} handleIncrement={handleIncrement} />
    </div>
  )
}

export default ThirdComponent