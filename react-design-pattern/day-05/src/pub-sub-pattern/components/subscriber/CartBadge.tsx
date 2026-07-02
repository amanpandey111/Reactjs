import { useState } from "react"
import { useEvent } from "../../hooks/useEvent"
const CartBadge = () => {
  const [item, setItem] = useState([])
  console.log(item)
  useEvent("cart:add", (data) => {
    console.log(data)
    setItem([...item, data])
  })
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-2xl">Subscriber</h1>
      <p className="text-4xl text-center">{item.length}</p>
      <ul>
        {
          item.map(i => (
            <li key={i.id}>{i.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CartBadge;
