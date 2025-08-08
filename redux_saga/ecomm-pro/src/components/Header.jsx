import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { FcUndo } from "react-icons/fc";

const Header =()=>{
    const result = useSelector((state)=>state.cartData)
    const product = useSelector((state)=>state.productData)
    console.log("product data ",product);
    console.log("cart data",result);
    return(
        <div className="header">
            <NavLink><FcUndo style={{fontSize:"3rem", colorr:"blue", cursor:'pointer', margin:"1rem"}}/></NavLink>
            <div className="cart-div">
                <span>{result.length}</span>
                <NavLink to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/></NavLink>
            </div>
        </div>
    )
}

export default Header;