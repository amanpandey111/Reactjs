import React, { useEffect, useLayoutEffect, useState } from 'react'

const ThapaExample = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (num === 0) {
      setNum(5 + Math.random() * 50)
    }
  }, [num])

  console.log("The value of Num is ",num);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={()=>setNum(0)} >check</button>
    </div>
  )
}

export default ThapaExample