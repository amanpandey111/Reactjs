import React from 'react'

const DisplayImages = ({images}) => {
  return (
    <div>
      {
        images.map((curEle)=> <img src={curEle.image} alt="" /> )
      }
    </div>
  )
}

export default DisplayImages