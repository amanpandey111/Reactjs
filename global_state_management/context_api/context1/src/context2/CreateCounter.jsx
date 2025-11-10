import { useContext } from 'react'
import { countContext } from './ContextProvide'

const CreateCounter = () => {
  const count = useContext(countContext)
  return (
    <div>
      <h2>Implemented ContextAPi</h2>
      <p>The Count is {count.count}</p>
      <button onClick={()=>count.setCount((prev)=>prev+1)} >Increment</button>
    </div>
  )
}

export default CreateCounter