import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const AppLayout = () => {
    const navigation = useNavigation()
    console.log(navigation);
    const [count, setCount] = useState(0)
   
  return (
    <div>
        <Header/>
        <div className='outlet-container'>
           <Outlet context={[count,setCount]} />
        </div>
        <Footer/>
    </div>
  )
}

export default AppLayout