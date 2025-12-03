import LoadingSpinner from "./common/LoadingSpinner"
import ErrorMessage from "./common/ErrorMessage"
import DisplayProducts from "./DisplayProducts"
import ProductHeader from "./ProductHeader"
import CartSummary from "./CartSummary"

function ProductListPresenter({products, error, loading, cartProducts, onHandleCartProduct}){

  if(loading){
    return <LoadingSpinner message="Your Data is Being loading..." />
  }
  if(error){
    <ErrorMessage message="Oop's Error Fecthing Your APi...!" />
  }

  return(
    <div className="mainDiv" >
      <ProductHeader/>
      <DisplayProducts products={products} cartProducts={cartProducts} onHandleCartProduct={onHandleCartProduct} />
      <CartSummary cartProducts={cartProducts}/>
    </div>
  )
}

export default ProductListPresenter