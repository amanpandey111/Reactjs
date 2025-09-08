import React, { useState } from 'react'

const WithoutUseTransition = () => {
  const [input, setInput] = useState("aman");
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value); // 🔴 directly updating (can lag)
  };
  return (
    <div>
      <input value={input} onChange={handleChange} placeholder='Type here...'
      className='border border-gray-400 rounded px-3 py-2 outline-none focus:ring-3 focus:ring-blue-400'
      />
      <SlowList query={query} />
    </div>
  )
}

export default WithoutUseTransition

const SlowList = ({ query }) => {
  const items = [];
  for (let i = 0; i < 5000; i++) {
    items.push(<div key={i}>{query} - Item {i}</div>);
  }
  return <div>{items}</div>;
}