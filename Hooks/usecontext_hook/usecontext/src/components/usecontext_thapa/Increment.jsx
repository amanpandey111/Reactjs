import React, { useContext } from 'react'
import { BioContext, useBioContext } from './BioProvider'

const Increment = () => {
//   const{count,handleIncrement}=useContext(BioContext)
  const{count,handleIncrement}=useBioContext()
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Increment