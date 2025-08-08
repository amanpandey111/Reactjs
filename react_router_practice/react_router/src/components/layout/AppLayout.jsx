import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const AppLayout = () => {
    const navigation = useNavigation()
    console.log(navigation);
   
  return (
    <div>
        <Header/>
        <div className='outlet-container'>
           <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default AppLayout