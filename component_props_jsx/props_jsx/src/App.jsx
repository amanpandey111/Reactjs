import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import PracticeFirst from './practice_prop1/PracticeFirst'

function App() {
  let wish = (
    <h1>Good afternoon</h1>
  )

  return (
    // <div className='container'>
    //   <h1>Profile Card Challenge</h1>
    //   <Profile
    //   name="Ajay sinha"
    //   age={30}
    //   greeting = {
    //     <div>
    //       <strong>Hello Ajay, have a wonderful day</strong>
    //     </div>
    //   }
    //   wish={wish}
    //   >
    //     <p>Hobbies:Reading, Hiking</p>
    //     <button className='btn btn-primary'>Contact</button>
    //   </Profile>
    // </div>
    <PracticeFirst/>
  )
}

export default App
