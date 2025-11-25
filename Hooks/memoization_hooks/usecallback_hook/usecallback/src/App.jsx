import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
import MainCounter from './components/usecallback_babbar/MainCounter'
import TodoApp from './components/tasks/todo_callback/TodoApp'

import PracticeCall1 from './components/usecallback_practice/PracticeCall1'
import PracticeCall2 from './components/usecallback_practice/PracticeCall2'
import PracticeCall3 from './components/usecallback_practice/PracticeCall3'
import BasicExample from './basics/BasicExample'

function App() {
  return (
    <div>
      {/* <MainCounter/> */}
      {/* <TodoApp/> */}

      {/* //! Let's Prcatice useCallback Examples  */}
      <PracticeCall1/>
      {/* <PracticeCall2/> */}
      {/* <PracticeCall3/> */}

      {/* //! let's Practice the useCallBack from very basics */}
      {/* <BasicExample/> */}
    </div>
  )
}

export default App
