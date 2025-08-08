import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { DataProvider } from '../../../ContextProvider'
import "./accessories_function.css"
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretBackCircle } from "react-icons/io5";


const ComputerDetails = () => {
    const{addCartData} = useContext(DataProvider)
    const data = useLoaderData()
    const navigate = useNavigate()

    const handleNavigation = () => {
            navigate(-1)
    }

    const{computer,handleIncrement} = useContext(DataProvider)
    const displayData = computer.filter((curEle)=>{
        return curEle.id===data
    })

    let company_name = computer.map((curEle)=>curEle.company)
    console.log(company_name);
    let company_list = [...new Set(company_name)]
    console.log(company_list);
  return (
    <>
        <section className='dynamic-computer-main'>
        <section className='dynamic-computer-section'>
            <div className='dynamic-computer-div1'>
                <form action="">
                        {
                        company_list.map((curEle)=>{
                            return(
                            <div key={curEle.id}>
                                <input type="checkbox" name='book' value={curEle} />
                                <label htmlFor="">{curEle}</label>
                            </div>
                            )
                        })
                        }
                  </form>
            </div>
            <div className='dynamic-computer-div2'>
                <aside className='computer-aside' >
                   <button className='button-back' onClick={handleNavigation} > <IoCaretBackCircle />Back</button>
                   <img src={displayData[0].image} alt="" />
                </aside>
                <div className='after-aside'>
                    <p><span>company</span> :{displayData[0].company}</p>
                    <p><span>model</span> :{displayData[0].model}</p>
                    <p><span>price</span> :{displayData[0].price}</p>
                    <p><span>description</span> :{displayData[0].description}</p>
                    <button className='button-cart' onClick={()=>{
                        handleIncrement(displayData[0]);
                        addCartData(displayData[0])
                    }}>  <FaCartShopping />  Add To Card</button>
                </div>
            </div>
        </section>
        </section>
    </>
  )
}

export default ComputerDetails