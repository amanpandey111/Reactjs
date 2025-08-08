// src/components/UseMemoPractice2.jsx

import React, { useState, useMemo } from 'react';

const UseMemoPractice2 = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [userNameInput, setUserNameInput] = useState('Alice');

  console.log('Parent: UseMemoPractice2 re-rendered.');

  // --- Scenario 2.1: Object created INLINE (will cause re-render of child) ---
  // A new object literal is created on EVERY render of UseMemoPractice2
  const inlineUserDetails = { name: userNameInput, age: 30 }; 

  // --- Scenario 2.2: Object memoized with useMemo (static dependencies) ---
  // This object's reference will remain stable unless its dependencies change.
  // Here, empty dependencies mean it's created once.
  const memoizedConfig = useMemo(() => {
    console.log('  --- useMemo for memoizedConfig is calculating ---');
    return { theme: 'dark', notifications: true };
  }, []); // Empty dependency array means it's created once

  // --- Scenario 2.3: Object memoized with useMemo (dynamic dependencies) ---
  // This object's reference will change ONLY when userNameInput changes.
  const dynamicUserDetails = useMemo(() => {
    console.log('  --- useMemo for dynamicUserDetails is calculating ---');
    return { name: userNameInput, age: 25 };
  }, [userNameInput]); // Dependency: userNameInput


  return (
    <div style={{ border: '2px solid #17a2b8', padding: '20px', margin: '20px', background: '#ebf7f9' }}>
      <h2>UseMemo Practice: Memoizing Objects/Arrays</h2>
      <p>Parent Refresh Count: {refreshCount}</p>
      <p>User Name Input: {userNameInput}</p>

      <button onClick={() => setRefreshCount(prev => prev + 1)}>
        Re-render Parent (No Prop Change)
      </button>
      <button onClick={() => setUserNameInput(prev => (prev === 'Alice' ? 'Bob' : 'Alice'))}>
        Change User Name (Affects Dynamic Prop)
      </button>

      <hr />

      {/* Child with inline object (will re-render on every parent render) */}
      <UserProfile 
        userDetails={inlineUserDetails} 
        config={memoizedConfig} // config is stable here, so focus on userDetails
      />

      <hr />

      {/* Child with memoized objects */}
      <UserProfile 
        userDetails={dynamicUserDetails} // This will change only when userNameInput changes
        config={memoizedConfig} // This is always stable
      />
    </div>
  );
};

export default UseMemoPractice2;

// --- Memoized Child Component ---
// This child will re-render ONLY if its props' references change
const UserProfile = React.memo(({ userDetails, config }) => {
  console.log('UserProfile: 🚀 Re-rendered!');
  return (
    <div style={{ border: '1px solid #28a745', padding: '10px', margin: '10px', background: '#e6ffed' }}>
      <h4>User Profile</h4>
      <p>Name: {userDetails.name}</p>
      <p>Age: {userDetails.age}</p>
      <p>Theme: {config.theme}</p>
    </div>
  );
});