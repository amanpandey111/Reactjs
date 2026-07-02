import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './components/UseEffect'

import Index from './components/thapa_useeffect/Index.jsx'
import EffectChallenge from './components/thapa_useeffect/EffectChallenge.jsx'
import CleanUp from './components/thapa_useeffect/CleanUp.jsx'
import CleanUp2 from './components/thapa_useeffect/CleanUp2.jsx'
import WindowResize from './cleanup_function/WindowResize.jsx'
import Preactice from './components/fresh_useeffect/Preactice.jsx'
import TimerDemo from './components/fresh_useeffect/TimerDemo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseEffect/> */}

      {/* <Index/> */}

      {/* <EffectChallenge/>  */}

      {/* <CleanUp/> */}

      {/* <CleanUp2/> */}

      {/* <WindowResize/> */}

      {/* <Preactice /> */}

      <TimerDemo />
    </div>
  )
}

export default App
