import { useEffect, useState } from "react"

const CustomApi = ()=> {
    // const[product,setProduct] = useState([])
    const product = useCustomapi()
    console.log(product);
    // const fetchApi =async()=>{
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const data = await res.json()
    //     console.log(data);
    //     setProduct(data)
    // }

    // useEffect(()=>{
    //     fetchApi()
    // },[])
    return(
        <div>
            <h1>Hey Let's Build the Custom Hook Which will Fetch the API</h1>
            {
                product.map((curEle)=>{
                    return (
                        <ProductCard imageUrl={curEle.image} title={curEle.title} price={curEle.price} key={curEle.id}/>
                    )
                })
            }
        </div>
    )
}
export default CustomApi

//! Let's Build seprate component for creating a card
const ProductCard = ({imageUrl,title,price}) => {
    return(
        <div>
            <img src={imageUrl} alt="" />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

//! Let's Build the custom Api Hook
export const useCustomapi = () => {
    const[product,setProduct] = useState([])
    const fetchApi = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json()
        setProduct(data)
    }
    useEffect(()=>{
        fetchApi()
    },[])
    return product
}