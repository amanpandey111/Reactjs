import React, { useContext } from 'react'
import { context } from './Practice1'

const Practice4 = () => {
    const{arr} = useContext(context)
  return (
    <div>
        {arr.map((curEle)=>{
            return (
                <div key={curEle.id}>
                    <p>{curEle.id}</p>
                    <p>{curEle.name}</p>
                    <p>{curEle.price}</p>
                    <p>{curEle.inStock}</p>
                    <p>{curEle.category}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Practice4