import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { useSelector } from "react-redux"

const App = () => {
  const[user, setUser] = useState(null)
  const[loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useSelector((state)=>state.auth.authdata)
  console.log(user);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      // console.log(userData);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email,password) => {
    // console.log(authData.employees.find((curEle)=>email==curEle.email && password==curEle.password))
    if(email=='admin@me.com' && password==123){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if( authData ){
      const employee = authData.employees.find((curEle)=>email==curEle.email && password==curEle.password)
      if(employee){
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        setLoggedInUserData(employee)
      }
    }else{
      alert("Invalid credentials")
    }
  }  
     
  return (
    <div>
      { !user ? <Login handleLogin={handleLogin} /> : '' }
      { (user!==null && user!==undefined) && (user=='admin' ? <AdminDashboard changeUser={setUser} /> : <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />) }



      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App

/*
header(4), tasklistnumber(4), tasklist(9), app(33)
*/