import { useEffect, useState } from "react"
import axios from "axios"

const Pokemon = () => {
    const[image,setImage] = useState("")
    const getApiData = async() => {
        // let res = await fetch("https://pokeapi.co/api/v2/pokemon/mankey")
        let res = await axios.get("https://pokeapi.co/api/v2/pokemon/mankey")
        // res = await res.json()
        // console.log(res.sprites.back_default);
        setImage(res.data.sprites.back_default);
    }

    useEffect(()=>{
        getApiData()
    },[])
    console.log(image);
  return (
    <section>
        <h1>'Mankey' inside</h1>
        <img src={image} alt="Loading" />
    </section>
  )
}

export default Pokemon