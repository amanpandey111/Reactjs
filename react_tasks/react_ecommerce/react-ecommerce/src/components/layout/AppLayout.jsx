import React, { useContext } from 'react'
import Header from '../navbar/Header'
import { Outlet } from 'react-router-dom'
import { DataProvider } from '../../ContextProvider'
import './applayout.css'

const AppLayout = () => {
  const {setIsPopup,setSearchPopup,setSearchTerm} = useContext(DataProvider)
  return (
    <>
      <div onClick={()=>{
        setIsPopup(false);
        setSearchPopup(false);
        setSearchTerm("")
      }}>
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