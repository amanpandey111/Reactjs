import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseControl from './components/UseControl'
import UseControl1 from './components/UseControl1'
import NestedObject from './components/NestedObject'
import ArrayField from './components/ArrayField'
import Controller1 from './components1/Controller1'
import Controller2 from './components1/Controller2'
import MyFormContext from './components3/MyFormContext'
import MyFormContext1 from './components3/MyFormContext1'
import FormComponent from './components4/FormComponent'
import UseForm from './use_form_state/UseForm'

function App() {
  return (
    <>
      {/* <UseControl /> */}
      {/* <UseControl1 /> */}
      {/* <NestedObject /> */}
      {/* <ArrayField/> */}

      <Controller1 />
      {/* <Controller2 /> */}

      {/* <MyFormContext /> */}
      {/* <MyFormContext1/> */}

      {/* <FormComponent /> */}

      {/* <UseForm/> */}
    </>
  )
}

export default App
