import React from 'react'

const Tags = ({tags}) => {
  return (
    <div className='flex gap-2' >
      {
        tags.map((curTag, index)=> <button key={index}>{curTag}</button> )
      }
    </div>
  )
}

export default Tags