import { useState, memo } from "react"

const ChildComp = memo(() => {
  console.log('Got Rendered')
  return <h1>Hello World</h1>
})

const MemoTech = () => {
  const [state, setState] = useState(0)
  return (
    <div className="border m-3 p-4">
      <div className="border-2 rounded-2xl p-3">
        <p>The Count of parent state : {state}</p>
        <button onClick={() => setState((prev) => prev + 1)} className="border-2 px-3 py-2 rounded-2xl cursor-pointer">Increase</button>
      </div>
      <div>
        <p>Child component</p>
        <ChildComp />
      </div>
    </div>
  )
}

export default MemoTech