import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { HOVERSTAR } from './MainStar';
import { HOVERSTAREND } from './MainStar'
import { SETCLICKINDEX } from './MainStar'

const PrintStar = React.memo(({ noOfStar, hoverIndex, dispatch, clickIndex }) => {
  let myArr = Array(Number(noOfStar)).fill(0)
  return (
    <div>
      {
        myArr.map((_,i)=>{
          return <div key={i}
          onMouseEnter={()=>dispatch({type: HOVERSTAR, payload: i})}
          onMouseLeave={()=>dispatch({type: HOVERSTAREND, payload: -1})}
          onClick={()=>dispatch({type: SETCLICKINDEX, payload: i})}
          >
            <BsFillStarFill
            className= { i<=hoverIndex ? ('hoverStar') : hoverIndex>=0 ? 'normalStar' : i<=clickIndex ? 'clickStar' : 'normalStar' }
            style={{ fontSize: 30, cursor: 'pointer'}} />
          </div>
        })
      }
    </div>
  )
})

export default PrintStar