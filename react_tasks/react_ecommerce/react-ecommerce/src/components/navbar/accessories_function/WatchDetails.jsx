import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { DataProvider } from '../../../ContextProvider';
import "./accessories_function.css"
import { IoCaretBackCircle } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";


const WatchDetails = () => {
    const{addCartData} = useContext(DataProvider)
   const data = useLoaderData()
   const navigate = useNavigate()
    const handleNavigation = () => {
            navigate(-1)
        }
    const{watch,handleIncrement} = useContext(DataProvider)
    // console.log(data);
    // console.log(watch);
    const displayData = watch.filter((curEle)=>{
        return curEle.id===data
    })
    // console.log(displayData);
    return (
        <>
            <section className='dynamic-watch-main'>
            <section className='dynamic-watch-section'>
                <div className='dynamic-watch-div1'>
                    <form action="">
                            {
                            watch.map((curEle)=>{
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
                <div className='dynamic-watch-div2'>
                    <aside className='watch-aside' >
                        <button onClick={handleNavigation} >Back</button>
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
                                                    addCartData(displayData[0])
                                                }}> <FaCartShopping /> Add To Card</button>
                                            </div>
                    </div>
                </div>
            </section>
            </section>
        </>
    )
}

export default WatchDetails