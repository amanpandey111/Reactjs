import React from 'react'
import Home from './Home'
import {BioProvider} from './BioProvider'
import About from './About'
import Increment from './Increment'
const AppMain = () => {
  return (
    <div>
        <BioProvider>
           <Home/>
           <br /><br />
           <hr />
           <hr />
           <About/>
           <br /><br />
           <hr />
           <hr />
           <Increment/>
        </BioProvider>
    </div>
  )
}

export default AppMain