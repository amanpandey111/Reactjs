import { createContext, useContext } from "react"

export const context = createContext()

const Practice1 = ({children})=> {
    const name="aman"
    const college="JBIET"
    const obj = {
        state:"Telangana",
        city:"Hyderabad",
        district:"Ranga Reddy"
    }
    const arr = [
        {
          id: 101,
          name: "Wireless Mouse",
          price: 499,
          inStock: true,
          category: "Electronics"
        },
        {
          id: 102,
          name: "Yoga Mat",
          price: 899,
          inStock: false,
          category: "Fitness"
        },
        {
          id: 103,
          name: "Notebook",
          price: 99,
          inStock: true,
          category: "Stationery"
        },
        {
          id: 104,
          name: "Coffee Mug",
          price: 199,
          inStock: true,
          category: "Kitchen"
        }
      ];

    return (
       <context.Provider value={{name,college,obj,arr}}>
          {children}
       </context.Provider>
    )
}
export default Practice1

//! Let's build custom hook
export const useCustomContext = ()=> {
    const context1 = useContext(context)
    return context1
}