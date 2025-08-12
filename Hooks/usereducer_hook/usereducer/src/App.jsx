import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducer from './components/UseReducer'
import UseReducer1 from './components/UseReducer1'
import Index from './components/practice(16)/Index'
import BestPractices from './components/practice(16)/BestPractices'
import BestPractices1 from './components/practice(16)/BestPractices1'
import UseReducerPractice from './components/practice(23)/UseReducerPractice'
import MultipleReducer from './usedispatch_hacks/MultipleReducer'

function App() {
  

  return (
   <div>
    {/* <UseReducer/> */}
    {/* <UseReducer1/> */}

    {/* <Index/> */}
    {/* <BestPractices/> */}

    {/* <BestPractices1/> */}

    {/* <UseReducerPractice/> */}

    {/* //! Let's utilise the useReducer for various purposes */}
    <MultipleReducer/>
   </div>
  )
}

export default App
