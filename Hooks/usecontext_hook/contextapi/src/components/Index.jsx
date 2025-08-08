import { createContext, useState } from "react";

//todo 1.create a context
export const BioContext = createContext()

//todo 2.crate a provider component    
const Index = ({children})=> {
    const[count,setCount] = useState(0)
    const myName = "Aman Pandey"
    const college = "JBIET"

    function handleIncrement(){
        setCount(count+1)
    }
    
    return <BioContext.Provider value={{myName,college,count,handleIncrement}}>
        {children}
    </BioContext.Provider>
}
export default Index