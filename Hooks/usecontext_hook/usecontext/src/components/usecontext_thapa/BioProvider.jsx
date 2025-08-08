import { createContext, use, useContext, useState } from "react";
import Home from "./Home";

//! 1.Create context
export const BioContext = createContext()

//! 2.Create provider 
const BioProvider = ({children})=> {
    const[count,setCount] = useState(0)

    function handleIncrement(){
        setCount(count+1)
    }

    const myName = "aman"
    const college = "Jbrec"

    const about = {
        name:"JBREC",
        loc:"Hyderabad"
    }

    return <BioContext.Provider value={{myName,college,about,count,handleIncrement}}>
        <p>{count}</p>
        {children}
    </BioContext.Provider>
}
export {BioProvider}

//! Custom Hook
export const useBioContext = ()=> {
    const context = use(BioContext);
    if(context===undefined){
        throw new Error('component mut be wrapped with BioProvider') //! try this if condition by putting any one component outside provider
    }
    return context
}