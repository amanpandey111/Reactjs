import { memo, useMemo, useState } from "react"
import MemoCount from "./MemoCount"

const ReactMemo = ()=> {
    const[count,setCount] = useState(0)
    // const obj = {
    //     name:"aman pandey",
    //     college:"JBIET"
    // }

    const obj = useMemo(()=>{
        return {
            name:"aman pandey",
            college:"JBIET"
        }
    },[])
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <MemoCount obj={obj} />
        </div>
    )
}
export default ReactMemo