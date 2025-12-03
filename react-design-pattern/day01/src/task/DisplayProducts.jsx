import Tags from "./Tags"

const DisplayProducts = ({products, onHandleCartProduct, cartProducts}) => {
  function isCart(id){
    return cartProducts.some((curEle)=>curEle.id===id)
  }
  return (
    <div>
      {
        products.map((curProduct)=> <div key={curProduct.id} >
          <img src={curProduct.imageUrl} alt="" />
          <p className="text-[#59A5FA] font-medium" >{curProduct.brand}</p>
          <p className="text-[white] font-bold">{curProduct.name}</p>
          <p className="text-[#807d7d]">{curProduct.description}</p>
          <Tags tags={curProduct.tags} />
          <p className="text-2xl font-medium text-transparent bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text">$ {curProduct.price}</p>
          <p>{curProduct.stock} in stock</p>
          <button className={`px-6 py-2 text-white font-semibold bg-linear-to-r
          ${isCart(curProduct.id) ? 'from-orange-500 to-red-500' : 'from-blue-500 to-green-500'} rounded-md cursor-pointer`}
          onClick={()=>onHandleCartProduct(isCart(curProduct.id) ? "delete" : "add",curProduct)}
          >{isCart(curProduct.id) ? "Remove" : "Add To Cart"}</button>
        </div> )
      }
    </div>
  )
}

export default DisplayProducts
