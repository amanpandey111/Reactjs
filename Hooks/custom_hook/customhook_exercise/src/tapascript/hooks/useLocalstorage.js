import { useState } from "react"

export function useLocalstorage(){
  const[localdata, setData] = useState("default@gmail.com")

  function setLocalData(data){
    setData(data.email)
    localStorage.setItem("email",JSON.stringify(data))
  }

  function deleteLocalData

  console.log(localdata)

  return [localdata, setLocalData]
}