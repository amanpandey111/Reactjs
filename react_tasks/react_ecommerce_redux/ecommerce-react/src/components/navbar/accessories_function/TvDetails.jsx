import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretBackCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addCartDataStore, countIncrement } from '../../../store';

const TvDetails = () => {

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

    const tv = useSelector((state)=>state.tv)
    const data = useLoaderData()
    const navigate = useNavigate()
    const handleNavigation = () => {
            navigate(-1)
        }
    const displayData = tv.filter((curEle)=>{
        return curEle.id===data
    })
    return (
        <>
            <section className='dynamic-tv-main'>
            <section className='dynamic-tv-section'>
                <div className='dynamic-tv-div1'>
                    <form action="">
                            {
                            tv.map((curEle)=>{
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
                <div className='dynamic-tv-div2'>
                    <aside className='tv-aside' >
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
                        }}><FaCartShopping />Add To Card</button>
                    </div>
                </div>
            </section>
            </section>
        </>
    )
}

export default TvDetails