import React, { use } from 'react'
import { useContext } from 'react'
import { BioContext, useBioContext } from './BioProvider'

const Home = () => {
  // const {myName,college} = use(BioContext)
  let myName,college
  let n = true
  if(n){
    ({myName,college} = use(BioContext))
  }
  //  const {myName,college} = useContext(BioContext)
  // const {myName,college} = useBioContext() //! This is my custom hook which is created at BioProvider.jsx , see here we don't require useContext, BioContext to Import 
  return (
    <div>
        <h1>Home Component</h1>
        <p>My name is : {myName} and I am from {college} College</p>
    </div>
  )
}

export default Home