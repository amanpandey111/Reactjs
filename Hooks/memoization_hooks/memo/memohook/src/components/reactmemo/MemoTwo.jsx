import React, { memo, useRef } from 'react'

const MemoTwo = memo(({count}) => {
    const sum = useRef(0)
    console.log("I got re-renderd");
  return (
    <div>
        <h2>The sum is :{sum.current}</h2>
        <button>Click sum</button>
        <p>{count}</p>
    </div>
  )
})

export default MemoTwo