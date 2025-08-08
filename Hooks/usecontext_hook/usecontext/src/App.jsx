import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Childa from './components/Childa'
import FirstComponent from './components/prop_drilling/FirstComponent'
import AppMain from './components/usecontext_thapa/AppMain'
import Practice1 from './components/usecontext_practice/Practice1'
import PracticeMain from './components/usecontext_practice/PracticeMain'

//! step 1: create context
//! step 2: wrap all childs insied a provoder
//! step 3: pass value
//! step 4: consumer ke andar jake consume karlo

const UserContext = createContext();

const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light')

  // return (
  //   <ThemeContext.Provider value={{theme,setTheme}}>
  //     <div id='container'
  //     style={{backgroundColor:theme==='light'?'beige':'black'}}
  //     >
  //       <Childa/>
  //     </div>
  //   </ThemeContext.Provider>
  // )


  let [user,setUser] = useState({name : "aman pandey"})

  return (
    // <div>
    //   <UserContext value={user}>
    //       <ThemeContext.Provider value={{theme,setTheme}}>
    //           <div id='container'
    //           style={{backgroundColor:theme==='light'?'beige':'black',color:theme==='light'?'black':'white'}}
    //           >
    //             <Childa/>
    //           </div>
    //      </ThemeContext.Provider>
    //   </UserContext>
    // </div>

    <div>
       {/* <FirstComponent/> */}

       {/* <AppMain/> */}

       <PracticeMain/>
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}