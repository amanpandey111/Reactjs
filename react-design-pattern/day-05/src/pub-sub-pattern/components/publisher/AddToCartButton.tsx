import eventBus from '../../lib/eventBus';
import type { ProductType } from '../../types/_practice';

const products: ProductType[] = [
  { id: crypto.randomUUID(), name: 'Soap' },
  { id: crypto.randomUUID(), name: 'Shampoo' },
  { id: crypto.randomUUID(), name: 'Towel' },
  { id: crypto.randomUUID(), name: 'Slipper' },
  { id: crypto.randomUUID(), name: 'Shoes' },
  { id: crypto.randomUUID(), name: 'Sneakers' },
]


const AddToCartButton = () => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomIndex];
    // console.log(selectedProduct)
    eventBus.publish('cart:add', selectedProduct)
  }

  return (
    <div
      className="w-max m-auto flex items-center"
    >
      <div className="flex flex-col items-center justify-center border px-6 py-3 rounded-2xl">
        <h2>Publisher</h2>
        <button
          className="border px-4 py-1 cursor-pointer rounded-2xl"
          onClick={handleClick}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default AddToCartButton;
