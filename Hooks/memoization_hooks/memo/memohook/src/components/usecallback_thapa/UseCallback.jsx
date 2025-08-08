import React, { memo, useCallback, useMemo, useState } from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    // const increment = () => {
    //     console.log("increment inside");
    //     setCount((prev) => prev + 1)
    // }

    const increment = useCallback(()=>{
                        console.log("increment inside");
                        setCount((prev) => prev + 1)
                    },[])

    // const decrement = () => {
    //     console.log("decrement inside");
    //     setCount((prev) => prev - 1)
    // }

    const decrement = useCallback(()=>{
        console.log("decrement inside");
        setCount((prev)=>prev-1)
    },[])
    

    return (
        <div className='p-4 min-h-screen font-display tracking-wider flex flex-col justify-center items-center bg-black text-white'>
            <h1 className='mb-6 text-2xl'>Count : {count}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    )
}

export default UseCallback

const Button = memo(({ onClick, children }) => {
    console.log(`Rendering button : ${children}`);

    return (
        <button
            className={`text-black font-semibold rounded-md mb-4 py-2 px-5 transition duration-300 ${
                children=="decrement" ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500"
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
)