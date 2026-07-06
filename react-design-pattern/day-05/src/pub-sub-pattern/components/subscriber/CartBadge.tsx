import { useMemo, useState } from "react";
import { useEvent } from "../../hooks/useEvent";
import type { ProductType } from "../../types/_practice";

const CartBadge = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  console.log(items)
  useEvent('cart:add', (data: ProductType) => {
    setItems((prev) => ([...prev, data]))
  })
  const isItemThere = useMemo(() => (items.length <= 0), [items])
  return (
    <div className="border mt-6 w-max m-auto p-4 rounded-2xl">
      <h2 className="text-center font-bold mb-3">Subscribers</h2>
      {
        isItemThere ? (
          <p>No Items There</p>
        ) : (
          items.map((curItem: ProductType) => (
            <div>
              <h1 className="text-center">{curItem.name}</h1>
            </div>
          ))
        )
      }
    </div>
  )
}

export default CartBadge;
