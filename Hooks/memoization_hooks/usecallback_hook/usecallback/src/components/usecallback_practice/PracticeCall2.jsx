import React, { useState, useEffect, useCallback } from 'react';

function PracticeCall2() {
  const [userId, setUserId] = useState(3);
  const [data, setData] = useState(null);

  // Problem: This function is re-created on every render of DataDisplay
  const fetchData = useCallback(async () => {         //! I just applied useCallback here
    console.log(`Fetching data for user ${userId}...`); // This runs on EVERY render due to new fetchData reference
    // Simulate API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const result = await response.json();
    setData(result);
  }, [userId]); // Dependency: userId. It changes when the user clicks the button.

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dependency: fetchData. It changes on every render!

  return (
    <div>
      <p>Current User ID: {userId}</p>
      <button onClick={() => setUserId(prevId => prevId + 1)}>
        Load Next User
      </button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default PracticeCall2;