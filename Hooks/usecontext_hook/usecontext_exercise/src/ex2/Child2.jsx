import React, { useContext } from 'react'
import { makeContext1, makeContext2 } from './Parent2'

const Child2 = () => {
    const{str,setStr} = useContext(makeContext1)
    const{num,setNum} = useContext(makeContext2)
    console.log(str,num);
  return (
    <>
      <h2>string : {str} <br /> Number : {num}</h2>
    </>
  )
}

export default Child2