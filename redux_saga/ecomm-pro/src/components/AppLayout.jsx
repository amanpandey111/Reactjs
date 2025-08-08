import { Outlet, useNavigate } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"

const AppLayout = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/")
    },[])
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default AppLayout