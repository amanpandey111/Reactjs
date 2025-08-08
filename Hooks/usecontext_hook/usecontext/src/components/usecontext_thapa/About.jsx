import React, { use, useContext } from 'react'
import { BioContext } from './BioProvider'

const About = () => {
  //! Here I am using "use" hooke(v19)
  const {about} = use(BioContext)

  // const {about} = useContext(BioContext)
   // const about = useContext(BioContext) : -> Here U will get the entire aobject so u need to access via about.about.name to get college name 
  return (
    <div>
        <h1>About College Details</h1>
        <h3>College Name : {about.name}</h3>
    </div>
  )
}

export default About