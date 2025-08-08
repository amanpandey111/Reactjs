import React, { createContext, useCallback, useEffect, useState } from 'react'
import mobile from './api/mobile.json'
import computer from './api/computer.json'
import watch from './api/watch.json'
import menwear from './api/menwear.json'
import womenwear from './api/womenwear.json'
import furniture from './api/furniture.json'
import kitchen from './api/kitchen.json'
import book from './api/book.json'
import fridge from './api/fridge.json'
import speaker from './api/speaker.json'
import ac from './api/ac.json'
import tv from './api/tv.json'

export const DataProvider = createContext()

const ContextProvider = ({children}) => {
  
  const[count,setCount] = useState(0)
  const[isPopup,setIsPopup] = useState(false)
  const[cartData,setCartData] = useState([])
  const[totalCost,setTotalCost] = useState(0)
  const[searchPopup,setSearchPopup] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const[modelSet,setModelSet] = useState("")

  const allProducts = [
    ...mobile, ...computer, ...watch, ...menwear, ...womenwear,
    ...furniture, ...kitchen, ...book, ...fridge, ...speaker, ...ac, ...tv
  ];

  //! Let's write the functionaly searchpopup appear and disappear
  const handleSearchPopup = () => {
    setSearchPopup(!searchPopup)
  } 
  const handleInputChange = (e) => {
    setSearchPopup(true)
    e.stopPropagation()
    const value = e.target.value;
    console.log(value);
    setSearchTerm(value);
  
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
  
    const filtered = allProducts.filter(item =>
      item.model.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5)); //todo show max 5 suggestions
  };

  //! Let me handle the total cost of the items

  const handletotalCost = () => {
      console.log(cartData);
      let costData = cartData.map((curEle)=>curEle.price*(curEle.quantity))
      console.log(costData);
      let finalTotal = 0
      for(let i=0;i<costData.length;i++){
        finalTotal += costData[i]
      }
      console.log(finalTotal);
      setTotalCost(finalTotal)
  }  
  
  
  function handleDictCount(curEle){
    console.log(curEle);
    let updateCartData =cartData.map((preEle)=>{
      if(preEle.model==curEle.model){
        return {...preEle, "quantity":preEle.quantity+1}
      }else{
        return {...preEle,"quantity":preEle.quantity}
      }
    }) 
    setCartData(updateCartData)
    handletotalCost();
  }

  function handleDictCountDecrement (curEle) {
    console.log(curEle);
    let updateCartData = cartData.map((preEle)=>{
      if(preEle.model==curEle.model){
        if(curEle.quantity<=1){
          return {...preEle,"quantity":1}
        }else{
          return {...preEle,"quantity":preEle.quantity-1}
        }
      }else{
        return {...preEle,"quantity":preEle.quantity}
      }
    })
    setCartData(updateCartData)
  }

  //! Adding the data(object in my crat so i can display)
  const addCartData = (data) => {
    data.quantity = 1;
    const found = cartData.some(el => el.id === data.id);
    if (!found) {
      setCartData(prev => [...prev, data]);
    } else {
      const updatedCart = cartData.map(item => 
        item.id === data.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
     setCartData(updatedCart);
    }
  };
  
  
  //! Removing the data item from my cart and also decreasing the count
  const removeCartData = (model) => {
    setCount((prev)=>prev-1)
    console.log(model);
    const updatedData = cartData.filter((curEle)=>curEle.model!==model)
    setCartData(updatedData)
  }

  const setPopumToggle = () => {
    setIsPopup(!isPopup)
  }

  //! Incrementing the count by 1
  const handleIncrement = (data) => {
    if(cartData.length<1){
      setCount((prev)=>prev+1)
    }else{
      let last = cartData[cartData.length-1]
      let r = last.id==data.id
      if(!r){
        setCount((prev)=>prev+1)
      }
    }
  }

  const handleDecrement = () => {
    setCount((prev)=>prev-1)
  }
  return (
    <DataProvider.Provider value={{mobile,computer,watch,menwear,womenwear,furniture,kitchen,book,fridge,speaker,ac,tv,count,handleIncrement,handleDecrement,
      cartData,addCartData,removeCartData,isPopup,setIsPopup,setPopumToggle,modelSet,handleDictCount,handleDictCountDecrement,totalCost,handletotalCost,
      searchPopup,handleSearchPopup,setSearchPopup,searchTerm, setSearchTerm,handleInputChange,suggestions, setSuggestions
    }}>
      {children}
    </DataProvider.Provider>
  )
}

export default ContextProvider