import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { DataProvider } from '../../../ContextProvider';
import "./accessories_function.css"
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretBackCircle } from "react-icons/io5";

const AcDetails = () => {
    const{addCartData,setIsPopup,handletotalCost} = useContext(DataProvider)
    const navigate = useNavigate()
    const data = useLoaderData()
    const{ac,handleIncrement} = useContext(DataProvider)
    const displayData = ac.filter((curEle)=>{
        return curEle.id===data
    })
    const handleNavigation = () => {
        navigate(-1)
    }
    return (
        <>
        <section className='dynamic-ac-main' >
        <section className='dynamic-ac-section' onClick={()=>setIsPopup(false)}>
            <div className='dynamic-ac-div1' onClick={()=>setIsPopup(false)}>
                <form action="">
                        {
                        ac.map((curEle)=>{
                            return(
                            <div key={curEle.id}>
                                <input type="checkbox" name='book' value={curEle.company} />
                                <label htmlFor="">{curEle.company}</label>
                            </div>
                            )
                        })
                        }
                  </form>
            </div>
            <div className='dynamic-ac-div2'>
                <aside className='ac-aside' onClick={()=>setIsPopup(false)}>
                   <button className='button-back' onClick={handleNavigation} > <IoCaretBackCircle />Back</button>
                   <img src={displayData[0].image} alt="" />
                </aside>
                <div className='after-aside'>
                    <div onClick={()=>setIsPopup(false)} >
                        <p><span>company</span> :{displayData[0].company}</p>
                        <p><span>model</span> :{displayData[0].model}</p>
                        <p><span>price</span> :{displayData[0].price}</p>
                        <p><span>description</span> :{displayData[0].description}</p>
                    </div>
                    <button className='button-cart' onClick={()=>{
                        handleIncrement(displayData[0]);
                        addCartData(displayData[0]);
                        handletotalCost(displayData[0])
                    }}><FaCartShopping />Add To Card</button>
                </div>
            </div>
        </section>
        </section>
        </>
    )
}
export default AcDetails