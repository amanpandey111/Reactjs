import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function MemoizationTask() {
  const [count, setCount] = useState(0);

  const childFunc = useCallback(() => {
    console.log("Child clicked")
  }, [])

  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount(c => c + 1)} className="border-2 px-2 rounded-2xl">Increment</button>
      <Child onClick={childFunc} />
    </>
  );
}