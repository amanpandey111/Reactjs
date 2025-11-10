import './App.css'
import FirstComponent from './components/FirstComponent'
import ContextProvide from './context2/ContextProvide'
import CreateCounter from './context2/CreateCounter'
import PracticeComp from './context2/PracticeComp'

function App() {

  return (
    <>
      <h1>Let's Practice the context api</h1>
      {/* <FirstComponent/> */}
      <ContextProvide>
        <CreateCounter/>
        <PracticeComp/>   {/* this comonent will get re-render */}
      </ContextProvide>
    </>
  )
}

export default App
