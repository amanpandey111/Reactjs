import React from 'react'
import Header from '../navbar/Header'
import { Outlet } from 'react-router-dom'
import './applayout.css'
import { useDispatch } from 'react-redux'
import { handleCountPopup } from '../../store'

const AppLayout = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div onClick={()=>dispatch(handleCountPopup(false))}>
        <Header/>
        <div className='outlet-div-main1'>
          <div className='outlet-div-main'>
            <div className='outlet-div'>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLayout