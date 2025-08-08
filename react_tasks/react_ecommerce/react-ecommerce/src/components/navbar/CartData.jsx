import React, { useContext } from 'react'
import { DataProvider } from '../../ContextProvider'

const CartData = () => {
    const{cartData} = useContext(DataProvider)
    // console.log(cartData);
    return (
        <div className='popup-functionality'>CartData</div>
    )
}

export default CartData