import seriesData from '../api/seriesData.json'
import './NetflixSeries.css'

import React from 'react'

const NetflixSeries = () => {
  return (
    <div id='main-container'>
      <ul>
        {
          seriesData.map((curEle,index)=>{
            return <li key={index}>
                      <img src={curEle.img_url} alt="" />
                      <h3>Name : {curEle.name}</h3>
                      <h4>Rating : {curEle.rating}</h4>
                      <p>Summary :{curEle.description} </p>
                      <p>Genre :{curEle.genre} </p>
                      <p>Cast :{curEle.cast} </p>
                      <button><a href={curEle.watch_url}>watch here</a></button>
                    </li>
          })
        }
      </ul>
    </div>
  )
}

export default NetflixSeries