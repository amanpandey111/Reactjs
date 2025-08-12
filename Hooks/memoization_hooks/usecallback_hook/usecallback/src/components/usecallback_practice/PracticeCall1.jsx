import React, { useCallback, useState } from 'react';

// This component is memoized to prevent re-renders if its props don't change
const MyButton = React.memo(({ onClick, label,}) => {
  console.log(`Rendering ${label} Button`); // See this log often!
  return <button style={{cursor:"pointer"}} onClick={onClick}>{label}</button>;
});

function PracticeCall1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Problem: This function is re-created on EVERY render of ParentComponent
  const handleClick = useCallback(() => {                   //! I just applied useCallback here
    setCount(prevCount => prevCount + 1);
  },[])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Count: {count}</p>
      {/* MyButton will re-render every time 'text' changes because 'handleClick' is a new function reference. */}
      <MyButton onClick={handleClick} label="Increment Count" />
    </div>
  );
}

export default PracticeCall1;