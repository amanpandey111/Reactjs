import { useEffect, useState } from 'react'
import './App.css'
import Todo1 from './todo1/Todo1'
import apiSlice from './store1/apiSlice'

function App() {
  const[show,setShow] = useState(false)

  //! second way to prefetch data, you can use inside the provider
  // const getTodoFn = apiSlice.usePrefetch("getTodo")
  // useEffect(()=>{
  //   getTodoFn(20)
  // },[])
  return (
    <>
      { show && <Todo1/> }
      <button onClick={()=>setShow(!show)} >toggle Todo</button>
    </>
  )
}

export default App
