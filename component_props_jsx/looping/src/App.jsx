import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetflixSeries from './components/NetflixSeries'
import seriesData from './api/seriesData.json'
import NetflixSeries1 from './components/NetflixSeries1'

function App() {
  const [count, setCount] = useState(0)
  console.log(seriesData);

  return (
    <div>
      <NetflixSeries/>
      <NetflixSeries1 seriesData={seriesData} />
    </div>
  )
}

export default App
