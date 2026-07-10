import { useEffect, useRef, useState } from "react"

const RenderTracker = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log(`Committed ${renderCount.current} times`);
  });

  return <h1>Check the console</h1>;
};

const ReRendering = () => {
  const [state, setState] = useState(0)
  return (
    <div className="m-3">
      <button
        onClick={() => setState((prev) => prev+1)}
        className="border px-3 py-2 cursor-pointer rounded-2xl"
      >
        click : {state}
      </button>
      <RenderTracker />
    </div>
  )
}

export default ReRendering