import { useContext } from 'react'
import './App.css'
import ToastProvider, { ToastContext, useNotification } from './toast/ToastProvider'

function App() {

  return (
    <>
      <ToastProvider>
        <MyTest/>
      </ToastProvider>
    </>
  )
}

function MyTest() {
  const addNotification = useNotification()
  function showToast() {
    addNotification({ title: "Hey There", position: "top-right" })
  }
  return <button onClick={showToast} >Show Toast</button>
}

export default App
