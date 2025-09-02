import { useState } from "react"

const Header = (props) => {
  const{data,changeUser}=props
  // console.log(changeUser);
  const[username, setUserName] = useState('')
  // console.log(data);
  function logOutUser(){
    console.log("let logout");
    localStorage.setItem('loggedInUser','')
    changeUser(null)
    // window.location.reload()
  }
  return (
    <div className="flex items-end justify-between" >
        <h1 className="text-2xl font-medium" >Hello <br /> <span className="text-3xl font-semibold" >{data?.firstName || "Admin"}</span> 🙋🏼‍♂️</h1>
        <button className="bg-red-600 text-lg font-medium text-white px-3 py-1.5 rounded-small cursor-pointer rounded-sm"
        onClick={logOutUser}
        >Log Out</button>
    </div>
  )
}

export default Header