// import { useDispatch, useSelector } from "react-redux";
// import { addCartDataStore, countIncrement } from "../../../store";

export const getMobileDetails = ({params})=> {
    // console.log(params);
    return params.mobileId
}


// const cartData = useSelector((state)=>state.cartData)
// const dispatch = useDispatch()

// export const handleIncrement = (data) => {
//         console.log(data);
//         dispatch(countIncrement(data))
//     }

// //! Adding data in cart
// export const addCartData = (data) => {
//     dispatch(addCartDataStore(data))
// }