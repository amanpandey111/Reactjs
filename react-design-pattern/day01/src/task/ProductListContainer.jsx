import { useState, useEffect } from "react"
import axios from "axios"
import ProductListPresenter from "./ProductListPresenter"
import './task.css'

const ProductListContainer = () => {
  const[products, setProducts] = useState([])
  const[error, setError] = useState(null)
  const[loading, SetIsLoading] = useState(false)
  const[cartProducts, setCartProduct] = useState([])

  function handleCartProduct(message, product){
    if(message=="add"){
      setCartProduct((prev)=>([...prev,product]))
    }else{
      let updateProduct = [...cartProducts]
      updateProduct = updateProduct.filter((curProduct)=>curProduct.id !== product.id)
      setCartProduct(updateProduct)
    }
  }

  const fetchApi = async() => {
    try {
      SetIsLoading(true)
      const result = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/`)
      setProducts(result.data)
    } catch (error) {
      setError("Unable to Fetch The Product Data....")
    } finally{
      SetIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchApi();
  },[])

  return (
    <ProductListPresenter
    products={products}
    error={error}
    loading={loading}
    cartProducts={cartProducts}
    onHandleCartProduct={handleCartProduct}
    />
  )
}

export default ProductListContainer