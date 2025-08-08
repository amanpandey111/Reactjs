import { useSelector } from "react-redux"
import { NavLink } from "react-router";
import "./accessories.css"
import { useState } from "react";

const Ac = ({isDirect}) => {
  //! Here We Will Get our ac data
  const ac = useSelector((state)=>state.ac)

  //! Here We Are Getting the checkbox company name which are unique
  let company_name = ac.map((curEle)=>curEle.company)
  let company_list = [...new Set(company_name)]

  //! writing logic so when user click on checkbox so data is displayed based on that
    const[update_mobile,setUpdateMobile] = useState([]) 
    function handleInputChange(e){
      const{value,checked} = e.target
      console.log(value);
      if(checked){
        const update = ac.filter((curEle)=>{
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
    <section className="ac-section">
      <div className='common-bg'><h2>AC</h2></div>
      {isDirect || <div className='ac-div-ul-some'>
        <ul>
          {
            ac.map((curEle)=>{
              if(curEle.id%2==0){
                return(
                  <li key={curEle.id}>
                    <NavLink to={`/ac/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                    <p>{curEle.company}</p>
                    <h1>From ₹ {curEle.price}</h1>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>}

      {isDirect && <div className='ac-div-ul'>
                <div className='form-div'>
                  <form action="">
                    {
                      company_list.map((curEle)=>{
                        return(
                          <div key={curEle}>
                            <input type="checkbox" name='book' value={curEle} onChange={handleInputChange}/>
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
                    
                      ac.map((curEle)=>{
                        
                          return(
                            <li key={curEle.id}>
                              <NavLink to={`/ac/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
                              <p>{curEle.company}</p>
                              <h1>From ₹ {curEle.price}</h1>
                            </li>
                          )
                        
                      })
                    
                    :update_mobile.map((curEle)=>{
                        
                      return(
                        <li key={curEle.id}>
                          <NavLink to={`/ac/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
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

export default Ac