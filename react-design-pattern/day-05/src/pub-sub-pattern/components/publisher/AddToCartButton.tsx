import { eventBus } from "../../lib/eventBus"

const products = [
  { id: crypto.randomUUID(), name: 'Soap' },
  { id: crypto.randomUUID(), name: 'Towel' },
  { id: crypto.randomUUID(), name: 'Bed' },
  { id: crypto.randomUUID(), name: 'Mirror' },
  { id: crypto.randomUUID(), name: 'Light' },
]

const AddToCartButton = () => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomIndex]
    console.log(selectedProduct)
    eventBus.publish('cart:add', {id: selectedProduct.id, name: selectedProduct.name})
  }
  return (
    <div
      className='flex space-x-2 border rounded border-gray-700 p-2 m-3'
    >
      <h2 className='text-2xl'>Publisher</h2>
      <button
        className='bg-emerald-600 rounded p-1 cursor-pointer'
        onClick={handleClick}
      >
        Add to cart
      </button>
    </div>
  )
}

export default AddToCartButton