import MainRoute from './components/router_component/MainRoute'
import './App.css'
import ContextProvider from './ContextProvider'

function App() {
  return (
    <>
      {/* <MainRoute/> */}
      <ContextProvider>
         <MainRoute/>
      </ContextProvider>
    </>
  )
}

export default App
