import './App.css'
import PopOver from './popover/PopOver'

function App() {
  return (
    <>
      <PopOver>
        <PopOver.Action>
          click me
        </PopOver.Action>
        <PopOver.Content>
          Hello There!
        </PopOver.Content>
      </PopOver>
    </>
  )
}

export default App
