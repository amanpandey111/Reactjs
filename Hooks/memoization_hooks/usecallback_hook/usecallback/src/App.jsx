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

function App() {
  const [count, setCount] = useState(0)
  // function handleClick(){
  //   setCount(count+1)
  // }

  let handleClick = useCallback( () =>{
      setCount(count+1)
    },[]
  )
  return (
    // <div>
    //   <div>
    //     Count : {count}
    //   </div>
    //   <br />
    //   <div>
    //     <button onClick={handleClick}>Increment</button>
    //   </div>
    //   <br />
    //   <div>
    //     <ChildComponent buttonName="click me2" handleclick={handleClick} />
    //   </div>
    // </div>

    <div>
      {/* <MainCounter/> */}
      {/* <TodoApp/> */}

      {/* //! Let's Prcatice useCallback Examples  */}
      {/* <PracticeCall1/> */}
      {/* <PracticeCall2/> */}
      <PracticeCall3/>
    </div>
  )
}

export default App
