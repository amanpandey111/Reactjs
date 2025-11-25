import { useState , useCallback } from 'react'
// import ChildComponent from './ChildComponent'
import { memo } from 'react';

const ChildComponent = memo(
    (props) => {
        console.log("child component got re-rendered");
        return (
          <div>
              <button onClick={props.handleClick}>
                  {props.buttonName}
              </button>
          </div>
        )
      }
)
 
const MainCounter = () => {
    const[count,setCount] = useState(0)
    console.log("getting re-rendered");

    //! Without useCallback
    // const handleIncrement = () => {
    //     // setCount(count+1)
    //     setCount((prev)=>prev+1)
    // }

    //! With useCallback()
    const handleIncrement = useCallback(() => {
        // setCount(count+1)
        setCount((prev)=>prev+1)
    },[])
 
    return (
        <div>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={handleIncrement} style={{backgroundColor:"red", color:"white", padding:"0.3rem", borderRadius:"0.3rem"}} >Increment</button>
            </div>
            <br />
            <div>
                <ChildComponent buttonName="click me" handleClick={handleIncrement}/>
            </div>
        </div>
    )
}
 
export default MainCounter
