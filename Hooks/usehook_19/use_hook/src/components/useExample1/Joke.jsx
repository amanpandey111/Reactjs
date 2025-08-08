import React from 'react'
import { use, Suspense } from 'react'

const fetchData = async() => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json()
    console.log(data);
    return data
}

fetchData()

const JokeItem = () => {
    // const joke_data = use(fetchData())
    // console.log(joke_data);
    return <>
      <div>
        <h2>hy\</h2>
      </div>
    </>
}

const Joke = () => {
  return (
    <Suspense fallback={<p>Loading joke...</p>}>
        <JokeItem/>
    </Suspense>
  )
}

export default Joke