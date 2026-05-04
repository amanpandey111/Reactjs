import { useCallback, useState } from 'react'
import './App.css'
// import Modal from './messy/MOdal'
import Modal from './with-pattern/modal/Modal'
import AccordionDemo from './with-pattern/accordion/AccordionDemo'
import MyCards from './tasks/cards/MyCards'
import MyCard from './task2/MyCard'
import CarTracker from './render-prop-pattern/messy/CarTracker'
import BikeTracker from './render-prop-pattern/messy/BikeTracker'
import MouseTracker from './render-prop-pattern/with-pattern/MouseTracker'
import MouseTrackerWithChildren from './render-prop-pattern/with-pattern/using-children-prop/MouseTrackerWithChildren'
import ToggleComponent from './render-prop-pattern/task/ToggleComponent'
import CreateToggles from './render-prop-pattern/task/CreateToggles'
import MovieWithHoc from './higher-order-component/movie/MovieWithHoc'
import AdminDashboardWithHoc from './higher-order-component/task/AdminDashboardWithHoc'
import ThemeSwitcher from './custom-hook-pattern/components/ThemeSwitcher'
import LocalStorage from './custom-hook-pattern/components/LocalStorage'
import ClipBoard from './custom-hook-pattern/components/ClipBoard'
import Dropdown from './custom-hook-pattern/components/Dropdown'

//! This is just example to overcome from react render prop de-bubugging issue
function Car({ pos }) {
  return <p>🚗 Car at {pos.x}</p>;
}

function Bike({ pos }) {
  return <p>🚴 Bike at {pos.x}</p>;
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  //todo this is used to overcome the performance issue 
  const renderCar = useCallback((pos) => {
    // return <Car pos={pos} />
    return (
      <p>🚗 Car is At {pos.x} - {pos.y}</p> 
    )
  },[])

  return (
    // <div className='flex flex-col items-center'>
    //   {/*//todo This is the Example of Messy Modal */}
    //   <Modal
    //   title="Delete Account"
    //   body="Are You Sure You Want to Delete Your Account ?"
    //   primaryAction={ <button>Delete</button> }
    //   secondaryAction={ <button>Cancel</button> }
    //   />

    //   {/* //todo : This is the example of compound component design patter which deals the above messy component */}
    //   <button onClick={()=>setIsOpen(true)} style={{
    //     backgroundColor: 'lightblue',
    //     padding: '10px',
    //     borderRadius: '5px',
    //     marginTop: '10px',
    //     cursor: 'pointer'
    //   }} >open</button>
    //   <Modal isOpen={isOpen} onCloseModal={()=>setIsOpen(false)} >
    //     <Modal.Header>
    //       <h1>Welcome!</h1>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <p> This Modal Built with compound component pattern </p>
    //       <AccordionDemo/>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <button>Close</button>
    //       <button>Do Action</button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>

    // <div className='maincard min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 relative overflow-hidden' >
    //   <div className="fixed inset-0 overflow-hidden pointer-events-none">
    //     <MyCards />
    //   </div>
    // </div>

    // <MyCard />

    //todo This is the example of render props
    // <>
    //   <CarTracker />
    //   <BikeTracker />
    // </>

    // <>
    //    {/* <button onClick={()=>setIsOpen((prev) => !prev)}>click here</button>
    //   <MouseTracker render={(pos) => (<p> 🚗 Car is At {pos.x} - {pos.y} </p>)} />
    //   <MouseTracker render={({x, y}) => (<p> 🚴🏻Bi-Cycle is At {x} - {y} </p>)} />
    //   <MouseTracker render={(pos) => (<p> ⛵ Boat is At {pos.x} - {pos.y} </p>)} /> */}

    //   {/* //todo this is the solution to overcome the de-bug issue */}
    //   {/* <MouseTracker render={(pos) => (<Car pos={pos}/>)} />
    //   <MouseTracker render={({x, y}) => (<p> 🚴🏻Bi-Cycle is At {x} - {y} </p>)} />
    //   <MouseTracker render={(pos) => (<p> ⛵ Boat is At {pos.x} - {pos.y} </p>)} /> */}

    //   {/* <button onClick={()=>setIsOpen((prev) => !prev)}>click here</button>
    //   <MouseTracker render={renderCar} /> */}
    // </>

    // <>
    // <MouseTrackerWithChildren>
    //   {
    //     ({x, y}) => (
    //       <p>🚗 Car is At Position {x} - {y}</p>
    //     )
    //   }
    // </MouseTrackerWithChildren>
    // <MouseTrackerWithChildren>
    //   {
    //     ({x, y}) => (
    //       <p>�🏻 Bike is At Position {x} - {y}</p>
    //     )
    //   }
    // </MouseTrackerWithChildren>
    // </>
    
    // <>
    //   {/* let's Do a Toggle Task */}
    //   {/* <CreateToggles /> */}
    // </>

    //! Let's practice a Higher Order Component
    // <>
    //   {/* <MovieWithHoc /> */}

    //   {/* //todo let's do a task on it */}
    //   {/* <AdminDashboardWithHoc /> */}
    // </>

    //! Let's Practice a custom hook here
    <>
      {/* <ThemeSwitcher /> */}
      {/* <LocalStorage/> */}
      {/* <ClipBoard/> */}
      <Dropdown/>
    </>
  )
}

export default App
