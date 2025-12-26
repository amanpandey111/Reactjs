import { useState } from 'react'
import './App.css'
// import Modal from './messy/MOdal'
import Modal from './with-pattern/modal/Modal'
import AccordionDemo from './with-pattern/accordion/AccordionDemo'

function App() {
  const[isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col items-center'>
      {/*//todo This is the Example of Messy Modal */}
      {/* <Modal
      title="Delete Account"
      body="Are You Sure You Want to Delete Your Account ?"
      primaryAction={ <button>Delete</button> }
      secondaryAction={ <button>Cancel</button> }
      /> */}

      {/* //todo : This is the example of compound component design patter which deals the above messy component */}
      <button onClick={()=>setIsOpen(true)} style={{
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '10px',
        cursor: 'pointer'
      }} >open</button>
      <Modal isOpen={isOpen} onCloseModal={()=>setIsOpen(false)} >
        <Modal.Header>
          <h1>Welcome!</h1>
        </Modal.Header>
        <Modal.Body>
          <p> This Modal Built with compound component pattern </p>
          <AccordionDemo/>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
          <button>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default App
