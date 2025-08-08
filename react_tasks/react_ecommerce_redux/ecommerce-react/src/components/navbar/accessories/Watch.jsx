import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router';

const Watch = ({isDirect}) => {
  //! Getting watch data
  const watch = useSelector((state)=>state.watch)

  //! GEtting the unique company name for checkbox
  let company_name = watch.map((curEle)=>curEle.company)
  let company_list = [...new Set(company_name)]

  //! writing logic so when user click on checkbox so data is displayed based on that
  const[update_mobile,setUpdateMobile] = useState([]) 
  function handleInputChange(e){
    const{value,checked} = e.target
    console.log(value);
    if(checked){
      const update = watch.filter((curEle)=>{
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

  return (
    <section onClick={()=>setIsPopup(false)} className={isDirect?"watch-section":"watch-section-some"}>
      <div className='common-bg'><h2>Watch</h2></div>
      {isDirect || <div className='watch-div-ul-some'>
        <ul>
          {
            watch.map((curEle)=>{
              if(curEle.id%2==0){
                return(
                  <li key={curEle.id}>
                    <NavLink to={`/watches/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                    <p>{curEle.company}</p>
                    <h1>From ₹ {curEle.price}</h1>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>}

      {isDirect && <div className='watch-div-ul'>
              <div className='form-div'>
                <form action="">
                  {
                    company_list.map((curEle)=>{
                      return(
                        <div key={curEle.id}>
                          <input type="checkbox" name='watch' value={curEle} onChange={handleInputChange}/>
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
                  
                    watch.map((curEle)=>{
                      
                        return(
                          <li key={curEle.id}>
                            <NavLink to={`/watches/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                            <p>{curEle.company}</p>
                            <h1>From ₹ {curEle.price}</h1>
                          </li>
                        )
                      
                    })
                  
                  :update_mobile.map((curEle)=>{
                      
                    return(
                      <li key={curEle.id}>
                        <NavLink to={`/watches/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
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

export default Watch