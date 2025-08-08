import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCartDataStore, decrementQuant, handleCountPopup, handleInputStore, removeCartDataStore } from '../../store'


const Header = () => {
  let cartData = useSelector((state)=>state.cartData)
  const count = useSelector((state)=>state.count)
  const total = useSelector((state)=>state.totalCost)
  const isCount = useSelector((state)=>state.isCount)
  const searchTerm = useSelector((state)=>state.searchTerm)
  const suggestions = useSelector((state)=>state.suggestion)
  const dispatch = useDispatch()
   
  //! Calling dispatch function to remove the item from my cart
  const removeCartData = (data) => {
    console.log(data);
    dispatch(removeCartDataStore(data))
  }

  const handleDictCount = (data) => {
    console.log(data);
    dispatch(addCartDataStore(data))
  }

  const handleDictCountDecrement = (data) => {
    console.log(data);
    dispatch(decrementQuant(data))
  }

  const setPopumToggle = () => {
    dispatch(handleCountPopup())
  }

  return (
    <>
      <header className='main-header'>
        <div className='main-header-div'>
            <div className='main-header-div1-parent'>
                <div className='main-header-div1'>
                    <div className='emart-div'>
                        <NavLink to="/">E-mart</NavLink>
                    </div>
                    <div className='input-div'>
                      <input
                        type="text"
                        placeholder='Search'
                        style={{outline:"0"}}
                        value={searchTerm}
                        onChange={(e)=>dispatch(handleInputStore(e.target.value))}
                        onClick={(e)=>e.stopPropagation()}
                      />
                      {suggestions.length > 0 && (
                        <ul className="suggestion-list" >
                          {suggestions.map((item, index) => (
                            
                            <NavLink to={`/${item.category}/${item.id}`} onClick={()=>console.log(item.category)}><li key={index} 
                             onClick={()=>{setSearchPopup(false);setSearchTerm("")}}
                            ><FaSearch />{item.model}</li></NavLink>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                        <p onClick={(event)=>{ event.stopPropagation(); setPopumToggle();}} style={{cursor:"pointer", width:"6rem",fontSize:"1.3rem"}}>Cart {count}</p>
                    </div>
                    
                      {isCount?
                       <div className='popup-message' onClick={(event)=>{event.stopPropagation()}} >
                         {
                            count==0 ? <h1>Cart is empty</h1> : <h1>Your Cart</h1>
                          }
                          {
                            cartData.map((curEle)=>{
                              return(
                                  count>=1 ? <div className='card-details-div'>
                                  <div className='card-detail-div2'>
                                      <div className='card-detail-div2-1'>
                                        <img src={curEle.image} alt="" />
                                        <p><span>company :</span>{curEle.company}</p>
                                        <p><span>model :</span>{curEle.model}</p>
                                        <p><span>Price Per Item</span> : {curEle.price}</p>
                                        <p><span>Total Price </span>: {(curEle.price*curEle.quantity).toFixed(2)}</p>
                                      </div>
                                      <div className='card-detail-div3'>
                                        <button disabled={curEle.quantity>=10?true:false} className='arihmetic-button' onClick={()=>{
                                          handleDictCount(curEle)
                                          
                                        }}>+</button>
                                        <br />
                                        <p style={{width:"1rem"}} >{curEle.quantity<1?0:curEle.quantity}</p>
                                        <button disabled={curEle.quantity==1?true:false} className='arihmetic-button' onClick={()=>{ 
                                          handleDictCountDecrement(curEle)
                                            }} >-</button>
                                        <button className='bg-red-button' onClick={()=>removeCartData(curEle)} >remove</button>
                                      </div>
                                    </div>
                                  </div> : ""
                                
                              )
                            })
                          }
                          {
                            count==0? "" : <div className='total-cost-div'><p className='total-cost'><span>Total Cost</span> : {parseInt(total).toFixed(2)} </p></div>
                          }
                       </div>
                      :""}
                    
                </div>
            </div>

            <div className='main-header-div2'>
                <ul>
                    <NavLink to="/mobile"><li>Mobile</li></NavLink>
                    <NavLink to="/computer"><li>Computer</li></NavLink>
                    <NavLink to="/watches"><li>Watches</li></NavLink>
                    <NavLink to="/menswear"><li>Men's Wear</li></NavLink>
                    <NavLink to="/womenswear"><li>Women's Wear</li></NavLink>
                    <NavLink to="/furniture"><li>Furnitures</li></NavLink>
                    <NavLink to="/kitchen"><li>Kitchen</li></NavLink>
                    <NavLink to="/books"><li>Books</li></NavLink>
                    <NavLink to="/fridge"><li>Fridge</li></NavLink>
                    <NavLink to="/speakers"><li>Speakers</li></NavLink>
                    <NavLink to="/ac"><li>AC</li></NavLink>
                    <NavLink to="/tv"><li>TV</li></NavLink>
                </ul>
                <hr style={{backgroundColor:"red"}}/>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header