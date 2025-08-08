import { useState } from "react"
import SecondComponent from "./SecondComponent"

const FirstComponent = () => {
    const[count,setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    return (
        <div>
            <h1>Hello Let's Learn Prop Drilling Today</h1>
            <br />
            <hr />
            <hr />
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <h2>First Component</h2>
            <br /><br />
            <hr />
            <hr />
            <SecondComponent data="react js" count={count} handleIncrement={handleIncrement} />
        </div>
    )
}
export default FirstComponent