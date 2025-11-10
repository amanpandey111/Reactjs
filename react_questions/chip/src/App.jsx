import { Provider } from 'react-redux'
import './App.css'
import MainChip from './components/MainChip'
import store from './components/rtk/store'
import MainAccordian from './acordian/MainAccordian'
import MainCheck from './nested_checkbox/MainCheck'
import MainOtpInput from './otpbox/MainOtpInput'

function App() {

  return (
    <Provider store={store}>
      {/* <MainChip/> */}
      {/* <MainAccordian/> */}

      {/* <MainCheck /> */}
      <MainOtpInput />
    </Provider>
  )
}

export default App
