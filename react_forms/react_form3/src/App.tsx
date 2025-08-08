import './App.css'
import DisableField from './components/DisableField'
import DisableSubmission from './components/DisableSubmission'
import FormNumber from './components/FormNumber'
import GetValues from './components/GetValues'
import SetValues from './components/SetValues'
import TouchDirty from './components/TouchDirty'
import WatchField from './components/WatchField'

function App() {
  return (
    <>
      <h1 style={{margin:"auto"}} >React Hook Form By Aman Pandey</h1>
      {/* <FormNumber /> */}
      {/* <WatchField/> */}
      {/* <GetValues/> */}
      {/* <SetValues/> */}
      {/* <TouchDirty/> */}
      {/* <DisableField/> */}
      <DisableSubmission/>
    </>
  )
}

export default App
