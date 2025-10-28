import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
        <h1>This is Header Constant</h1>
        <NavLink to='/shop' >Shop Now</NavLink>
        <NavLink to='/view' >Explore Product</NavLink>
        <NavLink to='/share'>Share Link</NavLink>
        <NavLink to='/fe' >Error Link</NavLink>
        <Outlet/>
        <h1>This is Footer</h1>
    </div>
  )
}

export default MainPage