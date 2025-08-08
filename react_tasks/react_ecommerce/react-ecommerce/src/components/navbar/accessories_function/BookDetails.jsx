import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { DataProvider } from '../../../ContextProvider';
import "./accessories_function.css"
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretBackCircle } from "react-icons/io5";

const BookDetails = () => {
  const{addCartData} = useContext(DataProvider)
    const navigate = useNavigate()
    const handleNavigation = () => {
          navigate(-1)
      }
    const data = useLoaderData()
    const{book,handleIncrement} = useContext(DataProvider)
    // console.log(data);
    // console.log(book);
    const displayData = book.filter((curEle)=>{
        return curEle.id===data
    })
    // console.log(displayData);
  return (
      <>
        <section className='dynamic-book-main' >
        <section className='dynamic-book-section'>
            <div className='dynamic-book-div1'>
                <form action="">
                        {
                        book.map((curEle)=>{
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
            <div className='dynamic-book-div2'>
                <aside className='book-aside' >
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

export default BookDetails