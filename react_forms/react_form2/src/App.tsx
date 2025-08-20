import './App.css'
import CustomValidation from './components/CustomValidation'
import Dynamic from './components/Dynamic'
import MyForm1 from './components/MyForm1'
import NestedObject from './components/NestedObject'
import UserinfoArray from './components/UserinfoArray'
import UserinfoDefault from './components/UserinfoDefault'
import UserinfoValidate from './components/UserinfoValidate'

interface defaulttype{
  name: string,
  email: string,
  phone: number
}

function App() {
  const _userData:defaulttype = {
    name : "Aman Pandey",
    email : "amanpandey@gmail.com",
    phone : 8787278566
  }
  return (
    <div style={{border:"2px solid green",textAlign:"center"}}>
      <h1>React Hook Form</h1>
      {/* <MyForm1/> */}
      {/* <UserinfoValidate/> */}
      {/* <UserinfoDefault userdata={_userData} /> */}
      {/* <NestedObject /> */}
      {/* <CustomValidation/> */}
      {/* <UserinfoArray /> */}
      <Dynamic />
    </div>
  )
}

export default App