import React, { useContext } from 'react'
import { context } from './Practice1'

const Practice3 = () => {
  const{obj}=useContext(context)
  return (
    <div>
        <h1>State Name : {obj.state} </h1>
    </div>
  )
}

export default Practice3