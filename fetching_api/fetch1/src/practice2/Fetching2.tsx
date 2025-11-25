import axios from 'axios'
import { useEffect } from 'react'

const baseUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})

const Fetching2 = () => {
  async function getApi(){
    let res = await baseUrl.get("todos")
    console.log(res.data)
  }

  useEffect(()=>{
    getApi();
  },[])

  return (
    <div>Fetching2</div>
  )
}

export default Fetching2