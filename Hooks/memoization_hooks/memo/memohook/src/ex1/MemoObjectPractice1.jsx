// src/components/MemoObjectUseMemoPractice.jsx

import React, { useState, useMemo } from "react";

const MemoObjectPractice1 = () => {
  const [parentClicks, setParentClicks] = useState(0);
  const [userName, setUserName] = useState("Charlie");

  // Scenario 2.1: Object memoized with useMemo (static content)
  // The 'fixedData' object reference will be stable across renders
  // because its dependencies array is empty ([]).
  const fixedData = useMemo(() => ({ id: 101, info: "Static Data" }), []);

  // Scenario 2.2: Object memoized with useMemo (dynamic content with dependency)
  // The 'dynamicData' object reference will only change when 'userName' changes.
  const dynamicData = useMemo(() => {
    console.log("useMemo for dynamicData is re-calculating...");
    return { id: 102, info: `User: ${userName}` };
  }, [userName]); // Dependency: userName

  const handleParentClick = () => {
    setParentClicks(prev => prev + 1);
    console.log("Parent: Triggering re-render (no object change).");
  };

  const handleChangeUserName = () => {
    setUserName(userName === "Charlie" ? "David" : "Charlie");
    console.log("Parent: Changing userName, which is a dependency.");
  };

  return (
    <div style={{ border: '2px solid navy', padding: '20px', color: 'white', background: '#333' }}>
      <h2 style={{ color: 'white' }}>Parent Component: MemoObjectUseMemoPractice</h2>
      <p>Parent Clicks: {parentClicks}</p>
      <p>Current User Name: {userName}</p>

      <button style={{color:"black"}} onClick={handleParentClick}>Re-render Parent (No Prop Change)</button>
      <button style={{color:"black"}} onClick={handleChangeUserName}>Change User Name (Dynamic Data Dependency)</button>

      {/* Passing the stably memoized object */}
      <MemoizedDataDisplay data={fixedData} />

      {/* Passing the conditionally memoized object */}
      <MemoizedDataDisplay data={dynamicData} />

    </div>
  );
};

export default MemoObjectPractice1;

// Memoized Child Component
const MemoizedDataDisplay = React.memo(({ data }) => {
  console.log("MemoizedDataDisplay: 🚀 Re-rendered!");
  return (
    <div style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}>
      <h3>Data Display Component (Memoized)</h3>
      <p>ID: {data.id}</p>
      <p>Info: {data.info}</p>
    </div>
  );
});