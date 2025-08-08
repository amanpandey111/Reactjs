
import React, { useState } from "react";

const MemoObjectPractice = () => {
  const [parentCounter, setParentCounter] = useState(0);

  // Scenario 1.1: Object created and passed directly from state
  // When 'handleChangeObject' is called, a NEW object is set into state.
  // This new object has a different memory address, even if content is similar.
  const [myObject, setMyObject] = useState({ id: 1, name: "Initial", value: 100 });

  const handleChangeObject = () => {
    // This creates a NEW object reference for 'myObject' state
    setMyObject({ id: 2, name: "Updated", value: 200 }); 
    console.log("Parent: Object state changed.");
  };

  const handleParentReRender = () => {
    setParentCounter(prev => prev + 1);
    console.log("Parent: Triggering re-render (without changing object prop).");
  };

  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h2>Parent Component: MemoObjectPractice</h2>
      <p>Parent Counter: {parentCounter}</p>
      <button onClick={handleChangeObject}>Change Object Prop</button> 
      <button onClick={handleParentReRender}>Re-render Parent (Object stays same)</button>

      {/* Passing the 'myObject' state to the memoized child */}
      <ChildWithObjectProp data={myObject} />

      <hr />

      {/* Scenario 1.2: Object created INLINE on every render */}
      {/* This object will have a NEW REFERENCE on EVERY parent re-render */}
      <InlineObjectChild obj={{ id: 3, label: "Inline Obj", value: parentCounter }} />
    </div>
  );
};


// Memoized Child Component that receives and uses the object prop
const ChildWithObjectProp = React.memo(({ data }) => {
  console.log("ChildWithObjectProp: 🚀 Re-rendered!"); // Log to see re-renders
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h3>Child Component (Memoized)</h3>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
});

// Another memoized child for inline object demonstration
const InlineObjectChild = React.memo(({ obj }) => {
  console.log("InlineObjectChild: 🔄 Re-rendered due to new inline object!");
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>Inline Object Child (Memoized)</h3>
      <p>Label: {obj.label}</p>
      <p>Value: {obj.value}</p>
    </div>
  );
});

export default MemoObjectPractice;