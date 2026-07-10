import { memo, useMemo, useState } from "react";

const ChildComp = memo(({ obj }: { obj: { name: string, role: string } }) => {
  console.log('Child Rendered')
  return (
    <div>
      <p>I am the child component</p>
      <p>The Name is {obj.name}</p>
    </div>
  )
})

const UseMemo = () => {
  const [state, setState] = useState(0)
  // const name = "aman"
  const obj = useMemo(() => {
    return {
      name: 'aman pandey',
      role: 'software engineer',
    }
  }, [])
  return (
    <div className="m-4 border-2 p-2 flex flex-col gap-3 rounded-2xl" >
      <div className="border p-2 flex - flex-col gap-1 rounded-3xl">
        <p className="text-center font-bold text-3xl">Let's Implment useMemo</p>
        <p>The Count for parent component : {state}</p>
        <button
          onClick={() => setState((prev) => prev + 1)}
          className="border rounded-2xl px-3 py-2 cursor-pointer w-fit"
        >
          Increment
        </button>
      </div>
      {/* <ChildComp name={name}/> */}
      <ChildComp obj={obj} />
    </div>
  )
}

export default UseMemo;
