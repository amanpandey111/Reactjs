import React, { useContext } from 'react'
import { BioContext } from './Index'

const Home = () => {
  const {myName,college} = useContext(BioContext)
  return (
    <div>
        <h1>Home</h1>
        <h1>{myName}</h1>
        <h1>{college}</h1>
    </div>
  )
}

export default Home