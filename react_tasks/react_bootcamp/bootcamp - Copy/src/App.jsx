import { useSelector } from 'react-redux';
import './App.css'
import MainRoute from './components/router/MainRoute';
import SignUp from './components/ui/SignUp';
import LogIn from './components/ui/LogIn';

function App() {
  const mycourse = useSelector((state)=>state.mycourse)
  // console.log(mycourse);
  return (
    <>
       <MainRoute/>
       {/* <SignUp/>
       <LogIn/> */}
    </>
  )
}

export default App
