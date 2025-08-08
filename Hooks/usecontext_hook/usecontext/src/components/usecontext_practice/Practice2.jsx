import React, { useContext } from 'react'
import { context, useCustomContext } from './Practice1'

const Practice2 = () => {
    // const{name,college}=useContext(context)
    const{name,college}=useCustomContext()
  return (
    <div>
        <h2>Student Name :{name} </h2>
        <h2>Student College : {college}</h2>
    </div>
  )
}

export default Practice2