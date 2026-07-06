import { useState } from "react";
import { useEvent } from "../../hooks/useEvent";
import type { ProductType } from "../../types/_practice";

const CartBadge = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  console.log(items)
  useEvent('cart:add', (data: ProductType) => {
    setItems((prev) => ([...prev, data]))
  })
  return (
    <div>
      <h2>Subscriber</h2>
    </div>
  )
}

export default CartBadge;
