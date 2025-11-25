import { useReducer, useState } from "react"
import './star.css'
import PrintStar from "./PrintStar";

//! creating actions for my Reducers
const ONCHANGESTAR = 'star/Onchange'
const SETSTAR = 'star/setStar'
export const HOVERSTAR = 'start/hoverstar'
export const HOVERSTAREND = 'start/hoverstarend'
export const SETCLICKINDEX = 'star/setclickindex'
//! creating actions for my Reducers

function startFunc(state, action) {
  console.log(action)
  switch (action.type) {
    case ONCHANGESTAR:
      return { ...state, tempStar: !isNaN(action.payload) ? action.payload : ''  }
    case SETSTAR:
      return { ...state, actualStar: action.payload }
    case HOVERSTAR:
      return { ...state, hoverIndex: action.payload }
    case HOVERSTAREND:
      return { ...state, hoverIndex: action.payload }
    case SETCLICKINDEX:
      let b = action.payload == state.clickIndex
      return { ...state, clickIndex:b ? -1 : action.payload }
  }
}

const MainStar = () => {
  const dataStar = {
    tempStar: '',
    actualStar: 5,
    hoverIndex:-1,
    clickIndex:-1,
  }
  const [starData, dispatch] = useReducer(startFunc, dataStar)
  console.log(starData)
  return (
    <section className="mainSection" >
      <div>
        <input type="text" value={starData.tempStar} onChange={(e) => dispatch({ type: ONCHANGESTAR, payload: e.target.value })} />
        <button onClick={() => dispatch({ type: SETSTAR, payload: starData.tempStar })} >apply</button>
      </div>
      {starData.actualStar >= 1 && <div>
        <PrintStar noOfStar={starData.actualStar} dispatch={dispatch} hoverIndex={starData.hoverIndex} clickIndex={starData.clickIndex} />
      </div>}
    </section>
  )
}

export default MainStar