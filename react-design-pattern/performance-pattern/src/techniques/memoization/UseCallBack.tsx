import { useState, memo, useCallback } from "react"

const ChildComp = memo(({ onClick }: { onClick: () => void }) => {
  console.log('Child Rendered');
  return (
    <div>
      <p>Hello World</p>
      <button onClick={onClick} className="border px-3 py-1 rounded-[3px] cursor-pointer">Click</button>
    </div>
  )
});

const UseCallBack = () => {
  const [state, setState] = useState(0)
  const childFunc = useCallback(() => {
    console.log('Clicke Function');
  }, [])
  return (
    <div className="border m-3 p-4">
      <div className="border-2 rounded-2xl p-3">
        <p className="border">We Will be learning useCallBack here</p>
        <p>The Count of parent state : {state}</p>
        <button onClick={() => setState((prev) => prev + 1)} className="border-2 px-3 py-2 rounded-2xl cursor-pointer">Increase</button>
      </div>
      <div>
        <p>Child component</p>
        <ChildComp onClick={childFunc} />
      </div>
    </div>
  )
}

export default UseCallBack