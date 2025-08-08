import axios from 'axios'
import './App.css'
import Movie from './pages/Movie'
import { useEffect, useState } from 'react'

function App() {
  //! First Way of Fetching API data using axios
  // const[data,setData] = useState([])
  // const API = "https://jsonplaceholder.typicode.com/posts"
  // const getMovieData = async()=> {
  //   try{
  //     const res = await axios.get(API)
  //     setData(res.data)
  //     // console.log(data);
  //     console.log(res.data);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>{
  //   getMovieData()
  // },[])
  // console.log(data);
  return (
    <>
      <div>
        {/* <h1>Let's Try first way to fetch the data using axios </h1> */}
        <Movie/>
      </div>
    </>
  )
}

export default App
