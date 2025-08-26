import './App.css'
import CustomPopup from './custom-modal-popup/CustomPopup'
import CustomTab from './custom-tab/CustomTab'
import ScrollIndicator from './scroll-indicator/ScrollIndicator'

function App() {

  return (
    <>
      <ScrollIndicator url='https://dummyjson.com/products?limit=120' />
      {/* <CustomTab/> */}
      {/* <CustomPopup/> */}
    </>
  )
}

export default App
