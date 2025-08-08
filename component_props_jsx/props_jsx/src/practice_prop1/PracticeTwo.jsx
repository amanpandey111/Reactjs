import { useState } from "react"


const PracticeTwo = ({name,isOn,num,content,data,component,image,image1,image3,handleIncrement}) => {
  return (
    <>
      <hr />
      <h2>Name : {name}</h2>
      <hr />
      <h2>Boolean : {String(isOn)}</h2> <hr />
      <h2>Number : {num}</h2>           <hr />
      {content} <hr />
      {data}    <hr />
      {component} <hr />
      <img src={image} alt="" />
      <img src={image1} alt="" />
      <img src={image3} alt="" />
      <h1>jhgh</h1>
      <button onClick={handleIncrement} >Increment</button>
    </>
  )
}

export default PracticeTwo