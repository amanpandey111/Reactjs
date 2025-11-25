import React, { useCallback, useState } from 'react'

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick} style={{ border: '2px solid', padding: 8 }} >Click me</button>;
})

const BasicExample = () => {
  const [count, setCount] = useState(0);

  // Function recreated every render ❌
  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };

  //! Function is memoized ✅ with []
  // const handleClick = useCallback(() => {
  //   console.log("Button clicked!");
  // }, []); // depends on nothing, so same function reference

  //! Function is memoized ✅ with [count] dependecny array
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, [count]); // depends on nothing, so same function reference

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ border: '2px solid', padding: 8, margin: 3 }} >Increase Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default BasicExample