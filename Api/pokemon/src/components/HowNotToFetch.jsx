import React, { useEffect, useState } from 'react'
import './Pokemon.css'

const HowNotToFetch = () => {

    // ! How Not to fetch data
    // const[apiData,setApiData] = useState([])
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     setApiData(data)
    //   })
    //   .catch((error)=>console.log(error))
    // console.log(apiData);

    //todo How to Fetch Api Data
    // const[apiData,setApiData] = useState([])
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //        .then((res)=>res.json())
    //        .then((data)=>setApiData(data))
    //        .catch((error)=>console.log(error))
    // },[])

    //todo Pokemon API data and also managing loading & error state
    // let[pokemon,setPokemon] = useState(null)
    // let[loading,setLoading] = useState(true)
    // let[error,setError] = useState("")
    // let Api = "https://pokeapi.co/api/v2/pokemon/pikachu"
    // const fetchPokemon = () => {
    //     fetch(Api)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setPokemon(data)
    //         setLoading(false)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //         setError(error)
    //         setLoading(false)
    //     })
    // }
    // useEffect(()=>{
    //     fetchPokemon()
    // },[])

    //todo Fetching api data using async await and try , catch
    let[pokemon,setPokemon] = useState(null)
    let[loading,setLoading] = useState(true)
    let[error,setError] = useState("")
    let Api = "https://pokeapi.co/api/v2/pokemon/pikachu"
    const fetchPokemon = async () => {
        try {
            const res = await fetch(Api)
            const data = await res.json();
            setPokemon(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchPokemon()
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return (
            <div>
                <h1>Error : {error.message}</h1>
            </div>
        )
    }
    if(pokemon){
        return (
            <section className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <ul className="card-memo">
                    <li className="pokemon-card">
                        <figure>
                            <img 
                            src={pokemon.sprites.other.dream_world.front_default} 
                            alt={pokemon.name}
                            className='pokemon-image' />
                        </figure>
                        <h1>{pokemon.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height : <span>{pokemon.height}</span>
                            </p>
                            <p className="pokemon-info">
                                Weight : <span>{pokemon.weight}</span>
                            </p>
                            <p className="pokemon-info">
                                Speed : <span>{pokemon.stats[5].base_stat}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
          )
    }
}

export default HowNotToFetch