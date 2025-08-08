import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './component.css'

const Cart = () => {
    const cartData = useSelector((state)=>state.cartData)
    console.log(cartData);
  return (
    <>
      <NavLink to="/">Go Back</NavLink>
      {
        cartData.length>=1 ?( <div>
            <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
            </tr>
            {
                cartData.map((item)=> <tr>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                </tr> )
            }
        </table>
      </div>
        </div> ) : (<h1>No Cart Item Available</h1>)
      }
    </>
  )
}

export default Cart