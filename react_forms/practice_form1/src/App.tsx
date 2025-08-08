import './App.css'
import CustomValidation from './component1/CustomValidation'
import MyForm1 from './component1/MyForm1'
import NestedObject from './component1/NestedObject'
import UserinfoArray from './component1/UserinfoArray'
import UserinfoDefault from './component1/UserinfoDefault'
import UserinfoValidate from './component1/UserinfoValidate'

const myvalue = {
  name:"aman pandey",
  email:"amanpandey7656@gmail.com"
}

function App() {
  return (
    <>
      {/* <MyForm1 /> */}
      {/* <UserinfoValidate /> */}
      {/* <UserinfoDefault dvalue={myvalue} /> */}
      {/* <NestedObject /> */}
      {/* <CustomValidation /> */}
      <UserinfoArray />
    </>
  )
}

export default App
