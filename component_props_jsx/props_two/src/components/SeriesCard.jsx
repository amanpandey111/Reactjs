import React from 'react'
import './SeriesCard.css'
import styled from 'styled-components';

const SeriesCard = ({curEle,index}) => {
    console.log(curEle);
    let {img_url,name,rating,description,genre,cast,watch_url} = curEle
  return (
    // <li>
    //     <img src={curEle.img_url} alt="" />
    //     <h3>Name:{curEle.name}</h3>
    //     <h4>Rating:{curEle.rating}</h4>
    //     <p>Summary : {curEle.description}</p>
    //     <p>Genre : {curEle.genre}</p>
    //     <p>Cast : {curEle.cast}</p>
    //     <button><a href={curEle.watch_url}>watch here</a></button>
    // </li>

    <li>
        <img src={img_url} alt="" />
        <h3>Name:{name}</h3>
        <h4>Rating: <span className={`rating ${rating>8.5?"super":"normal"}`}>{rating}</span> </h4>
        <p>Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <button className={rating>8.5?"super":"normal"}><a href={watch_url}>watch here</a></button>
        {/* <button className={`${rating>8.5?"super":"normal"}`}><a href={watch_url}>watch here</a></button> */}
    </li>
  )
}

export default SeriesCard