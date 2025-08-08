import React, { useContext, useState } from 'react'
import { DataProvider } from '../../../ContextProvider'
import './accessories.css'
import { NavLink } from 'react-router-dom'
import MobileDetails from '../accessories_function/MobileDetails'

const Mobile = ({isDirect}) => {
  const {mobile,setIsPopup} = useContext(DataProvider)
  const[update_mobile,setUpdateMobile] = useState([]) 

  function handleInputChange(e){
    const{value,checked} = e.target
    console.log(value);
    if(checked){
      const update = mobile.filter((curEle)=>{
        return curEle.company==value
      })
      setUpdateMobile((prev)=>(
        [...prev,...update]
      ))
    }else if(checked==false){
      console.log("I am Unchecked");
      const update = update_mobile.filter((curEle)=>{
        return curEle.company !== value
      })
      setUpdateMobile(update)
    }
  }
  
  let company_name = mobile.map((curEle)=>curEle.company)
  console.log(company_name);
  let company_list = [...new Set(company_name)]
  console.log(company_list);

  return (
    
    <section onClick={()=>setIsPopup(false)} className={isDirect?"mobile-section":"mobile-section-some"} >
        <div className='common-bg'><h2>Mobiles</h2></div>
        {isDirect || <div className='mobile-div-ul-some'>
          <ul>
            {
              mobile.map((curEle)=>{
                if(curEle.id%2==0){
                  return(
                    <li key={curEle.id}>
                      <NavLink to={`/mobile/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                      <p>{curEle.company}</p>
                      <h1>From ₹ {curEle.price}</h1>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>}

        {isDirect && <div className='mobile-div-ul-grid'>
          <div className='form-div'>
            <form action="">
              {
                company_list.map((curEle)=>{
                  return(
                    <div key={curEle}>
                      <input type="checkbox" name='mobile' value={curEle} onChange={handleInputChange} />
                      <label htmlFor="">{curEle}</label>
                    </div>
                  )
                })
              }
            </form>
          </div>
          <ul>
            {
              update_mobile.length<1?
              
                mobile.map((curEle)=>{
                  
                    return(
                      <li key={curEle.id}>
                        <NavLink to={`/mobile/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                        <p>{curEle.company}</p>
                        <h1>From ₹ {curEle.price}</h1>
                      </li>
                    )
                  
                })
              
              :update_mobile.map((curEle)=>{
                  
                return(
                  <li key={curEle.id}>
                    <NavLink to={`/mobile/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                    <p>{curEle.company}</p>
                  </li>
                )
              
            })
            }
          </ul>
        </div>}
    </section>

  )
}

export default Mobile