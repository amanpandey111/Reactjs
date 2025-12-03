import { IoCartOutline } from "react-icons/io5";

function CartSummary({cartProducts}){
  console.log(cartProducts)
  return(
    <div>
      <h1 className="text-2xl font-medium" >Products In Your Cart</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>brand</th>
            <th>category</th>
            <th>name</th>
            <th>price</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {
            cartProducts.map((curEle)=>{
              return(
                <tr>
                  <td>{curEle.id}</td>
                  <td>{curEle.brand}</td>
                  <td>{curEle.category}</td>
                  <td>{curEle.name}</td>
                  <td>{curEle.price}</td>
                  <td>{curEle.rating}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartSummary