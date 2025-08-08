import React, { useContext, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { DataProvider } from '../../ContextProvider'
import { FaSearch } from "react-icons/fa";


const Header = () => {
  const {count,isPopup,setIsPopup,setPopumToggle,cartData,removeCartData,handleDictCount,handleDictCountDecrement,totalCost,handletotalCost,searchPopup,handleSearchPopup,setSearchPopup } = useContext(DataProvider)
  const { mobile, computer, watch, menwear, womenwear, furniture, kitchen, book, fridge, speaker, ac, searchTerm, setSearchTerm,handleInputChange} = useContext(DataProvider);
  const{suggestions, setSuggestions} = useContext(DataProvider)

  // const allProducts = [
  //   ...mobile, ...computer, ...watch, ...menwear, ...womenwear,
  //   ...furniture, ...kitchen, ...book, ...fridge, ...speaker, ...ac, ...tv
  // ];
  // console.log(allProducts);  
  // const [searchTerm, setSearchTerm] = useState('');
  // const [suggestions, setSuggestions] = useState([]);

  // const handleInputChange = (e) => {
  //   console.log(e);
  //   e.stopPropagation()
  //   if(searchPopup==false){
  //     console.log("I got executed");
  //   }
  //   setSearchPopup(true)
  //   // if(!searchPopup){
  //   //   setSearchPopup('')
  //   // }
  //   const value = e.target.value;
  //   console.log(value);
  //   setSearchTerm(value);
  
  //   if (value.trim() === '') {
  //     setSuggestions([]);
  //     return;
  //   }
  
  //   const filtered = allProducts.filter(item =>
  //     item.model.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSuggestions(filtered.slice(0, 5)); //todo show max 5 suggestions
  // };

  
  //! Let's write the logic for calculating total sum
  let aray = cartData.map((curEle)=>curEle.price*curEle.quantity)
  console.log(aray);
  let total = 0
  for(let i=0; i<aray.length;i++){
    total+=aray[i]
  }
  console.log(total);
  

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
                        value={searchTerm}
                        onChange={handleInputChange}
                        onClick={(e)=>e.stopPropagation()}
                        style={{outline:"0"}}
                        className={suggestions.length>0 && searchPopup ? "":"special-input-class"}
                      />
                      {suggestions.length > 0 && searchPopup && (
                        <ul className="suggestion-list" onClick={(e)=>e.stopPropagation()}>
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
                        {isPopup && 
                        <div className='popup-message' onClick={(event)=>event.stopPropagation()}>
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
                                        <button className='bg-red-button' onClick={()=>removeCartData(curEle.model)} >remove</button>
                                      </div>
                                    </div>
                                  </div> : ""
                                
                              )
                            })
                          }
                          {
                            count==0? "" : <div className='total-cost-div'><p className='total-cost'><span>Total Cost</span> : {total.toFixed(2)} </p></div>
                          }
                        </div>}
                    </div>
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