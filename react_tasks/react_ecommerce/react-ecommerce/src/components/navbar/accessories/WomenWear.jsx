import React, { useContext, useState } from 'react'
import { DataProvider } from '../../../ContextProvider'
import { NavLink } from 'react-router-dom'

const WomenWear = ({isDirect}) => {
  const{womenwear,setIsPopup} = useContext(DataProvider)
  const[update_mobile,setUpdateMobile] = useState([])
  function handleInputChange(e){
    const{value,checked} = e.target
    console.log(value);
    if(checked){
      const update = womenwear.filter((curEle)=>{
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

  //! writing the ligoc to remove the duplicate checkbox(company name)
  let company_name = womenwear.map((curEle)=>curEle.company)
  console.log(company_name);
  let company_list = [...new Set(company_name)]
  console.log(company_list);

  return (
    <section onClick={()=>setIsPopup(false)} className={isDirect?"women-section":"women-section-some"}>
      <div className='common-bg'><h2>Women Wear</h2></div>
      {isDirect || <div className='women-div-ul-some'>
        <ul>
          {
            womenwear.map((curEle)=>{
              if(curEle.id%2==0){
                return(
                  <li key={curEle.id}>
                    <NavLink to={`/womenswear/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                    <p>{curEle.company}</p>
                    <h1>From ₹ {curEle.price}</h1>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>}

      {isDirect && <div className='women-div-ul'>
          <div className='form-div'>
            <form action="">
              {
                company_list.map((curEle)=>{
                  return(
                    <div key={curEle.id}>
                      <input type="checkbox" name='womenwear' value={curEle} onChange={handleInputChange} />
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
              
                womenwear.map((curEle)=>{
                  
                    return(
                      <li key={curEle.id}>
                        <NavLink to={`/womenswear/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                        <p>{curEle.company}</p>
                        <h1>From ₹ {curEle.price}</h1>
                      </li>
                    )
                  
                })
              
              :update_mobile.map((curEle)=>{
                  
                return(
                  <li key={curEle.id}>
                    <NavLink to={`/womenswear/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
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

export default WomenWear