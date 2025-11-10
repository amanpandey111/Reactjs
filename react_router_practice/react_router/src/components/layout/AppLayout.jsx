import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@mui/material'

const AppLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='outlet-container'>
        <Outlet context={[count, setCount]} />
      </div>
      <div>
        <Breadcrumbs>
          
          <Typography onClick={()=>navigate("/")} >
            Home
          </Typography>
          <Typography>
            Javascript
          </Typography>
        </Breadcrumbs>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout