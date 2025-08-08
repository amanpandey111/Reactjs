import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
import UseCallApp from './components/usecallback_thapa/UseCallApp'
import MainCounter from './components/usecallback_babbar/MainCounter'
import TodoApp from './components/tasks/todo_callback/TodoApp'

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
      {/* <UseCallApp/> */}

      <MainCounter/>

      {/* <TodoApp/> */}
    </div>
  )
}

export default App
