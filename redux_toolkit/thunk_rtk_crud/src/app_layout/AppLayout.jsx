// import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { setDropdown } from '../features/UserDetailSlice'
import { useEffect } from 'react'

const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    navigate("/")
  },[])
  return (
    <section onClick={()=>dispatch(setDropdown("global"))} style={{height:"100vh"}}>
        <Navbar/>
        <Outlet/>
        {/* <Create/> */}
    </section>
  )
}

export default AppLayout