import React, { useState, useEffect, useCallback } from 'react';

function PracticeCall2() {
  const [userId, setUserId] = useState(3);
  const [data, setData] = useState(null);

  // const fetchData = async () => {         
  //   console.log(`Fetching data for user ${userId}...`);
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  //   const result = await response.json();
  //   setData(result);
  // }

  const fetchData = useCallback(async () => {         
    console.log(`Fetching data for user ${userId}...`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const result = await response.json();
    setData(result);
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("Hello");

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