import React from 'react'
import ThirdComponent from './ThirdComponent'

const SecondComponent = ({data,count,handleIncrement}) => {
  return (
    <div>
        <h2>Second Component</h2>
        <h3>Data From First Compnent : {data}</h3>
        <p>{count}</p>
        <button onClick={handleIncrement} >Increment</button>
        <br /><br />
        <hr />
        <hr />
        <ThirdComponent data={data} count={count} handleIncrement={handleIncrement} />
    </div>
  )
}

export default SecondComponent