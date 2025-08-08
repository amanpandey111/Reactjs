import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemo from './components/UseMemo'
import Memo from './components/code_sufyan/Memo'
import UseMemoPractice1 from './practice1/UseMemoPractice1'
import UseMemoPractice2 from './practice1/UseMemoPractice2'

function App() {
  // const [count, setCount] = useState(0)
  // const [input,setInput] = useState(0)
  // function expensiveTask(num){
  //   for(let i=0;i<1000000000;i++){}
  //   return num*2
  // }
  // let doubleValue = useMemo(()=>expensiveTask(input),[input])
  return (
    // <div>
    //   <button onClick={()=>setCount(count+1)}>Increment</button>
    //   <h1>Count :{count}</h1>
    //   <div>
    //     <input type="number"
    //       placeholder='Enter Number'
    //       value={input}
    //       onChange={(e)=>{setInput(e.target.value)}}
    //       />
    //     <h2>Double : {doubleValue}</h2>
    //   </div>
    // </div>

    <div>
      {/* <Memo/> */}

      {/* <UseMemoPractice1/> */}

      <UseMemoPractice2/>
    </div>
  )
}

export default App
