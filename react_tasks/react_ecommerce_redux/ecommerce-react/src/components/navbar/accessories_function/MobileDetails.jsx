import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import "./accessories_function.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretBackCircle } from "react-icons/io5";
import { addCartDataStore, countIncrement } from '../../../store';

const MobileDetails = () => {

    const cartData = useSelector((state)=>state.cartData)
    const dispatch = useDispatch()

    // ! dealing with count
    const handleIncrement = (data) => {
        console.log(data);
        dispatch(countIncrement(data))
    }

    //! Adding data in cart
    const addCartData = (data) => {
        dispatch(addCartDataStore(data))
    }

    //! getting the id 
    const data = useLoaderData()

    const navigate = useNavigate()
    const handleNavigation = () => {
            navigate(-1)
        }
        
    const mobile = useSelector((state)=>state.mobile)

    const displayData = mobile.filter((cureEle)=>{
        return cureEle.id === data
    })

    let company_name = mobile.map((curEle)=>curEle.company)
    let company_list = [...new Set(company_name)]
  return (
    <>
        <section className='dynamic-mobile-main'>
        <section className='dynamic-mobile-section'>
            <div className='dynamic-mobile-div1'>
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
            <div className='dynamic-mobile-div2'>
                <aside className='mobile-aside'>
                   <button className='button-back' onClick={handleNavigation} > <IoCaretBackCircle />Back</button>
                   <img src={displayData[0].image} alt="" />
                </aside>
                <div className='after-aside'>
                    <p><span>company</span> :{displayData[0].company}</p>
                    <p><span>model</span> :{displayData[0].model}</p>
                    <p><span>price</span> :{displayData[0].price}</p>
                    <p><span>description</span> :{displayData[0].description}</p>
                    <div className='button-div'>
                        <button className='button-cart' onClick={()=>{
                            handleIncrement(displayData[0]);
                            addCartData(displayData[0]);
                            // dispatch(addCartDataStore(displayData[0]))
                        }}> <FaCartShopping /> Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
        </section>
    </>
  )
}

export default MobileDetails
