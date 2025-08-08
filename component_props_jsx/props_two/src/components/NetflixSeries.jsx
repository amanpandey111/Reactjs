import seriesData from '../api/seriesData.json'
import './NetflixSeries.css'

import React from 'react'
import SeriesCard from './SeriesCard'

const NetflixSeries = () => {
  return (
    <div id='main-container'>
      <ul className='container'>
        {
          seriesData.map((curEle,index)=>{
            return <SeriesCard key={curEle.id} curEle={curEle} index={index} />
          })
        }
      </ul>
    </div>
  )
}

export default NetflixSeries