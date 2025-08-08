import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import './component.css'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData)
  // const data = useSelector((state)=>state)
  useEffect(()=>{
    dispatch(productList())
  },[])
  console.log(data);
  return (
    <div>
      <button style={{border:"2px solid", marginLeft:"45%", cursor:"pointer"}} onClick={()=>dispatch(emptyCart())}>Empty Cart</button> <br /> 
      {/* <button onClick={()=>dispatch(productList(product))} >Call Product List</button> */}
      {/* <button>Call Product List</button> */}
      <div className="product-container">
        {
          data.map((item)=> <div key={item.id} className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name}</div>
            <div>color : {item.color}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <button onClick={() =>dispatch(addToCart(item))} style={{cursor:"pointer", marginRight:"0.5rem"}}>Add to cart</button>
            <button onClick={()=>dispatch(removeToCart(item.id))} style={{cursor:"pointer"}}>Remove to Cart</button>
          </div> )
        }
      </div>
    </div>
  );
}

export default Main;