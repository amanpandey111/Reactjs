import { useState } from 'react'
import './App.css'
import CarTracker from './messy/CarTracker'
import BikeTracker from './messy/BikeTracker'
import MouseTracker from './with-pattern/MouseTracker'
import MouseTrackerWithChildren from './with-pattern/using-children/MouseTrackerWithChildren'
import ToggleTracker from './tasks/toggle/ToggleTracker'

function App() {

  return (
    // <div className='flex flex-col items-center m-2' >
    //   {/*//! this is the messy way */}
    //   {/* <CarTracker/>
    //   <BikeTracker/>  */}

    //   {/* //! This is the Render Prop Pattern */}
    //   {/* <MouseTracker render={(pos)=>(<p>🚗 Car is At Position ({pos.x}, {pos.y})</p>)} />
    //   <MouseTracker render={(pos)=>(<p>🚴 Bike is At Position ({pos.x}, {pos.y})</p>)} /> */}

    //   {/* //! This is the Compound component patter */}
    //   {/* <MouseTrackerWithChildren>
    //     {
    //       ({x,y}) => (
    //         <p>🚗 Car is At Position ({x}, {y})</p>
    //       )
    //     }
    //   </MouseTrackerWithChildren>
    //   <MouseTrackerWithChildren>
    //     {
    //       ({x,y}) => (
    //         <p>🚴bike is At Position ({x}, {y})</p>
    //       )
    //     }
    //   </MouseTrackerWithChildren> */}
    // </div>
    <div>
      <ToggleTracker/>
    </div>
  )
}

export default App
