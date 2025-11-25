import code1 from '../assets/code1.jpg'
import code2 from '../assets/code2.jpg'
import code3 from '../assets/code3.webp'
import code4 from '../assets/code4.jpg'
import code5 from '../assets/code5.jpg'
import code6 from '../assets/code6.webp'
import code7 from '../assets/code7.jpg'
import code8 from '../assets/code8.jpg'
import code9 from '../assets/code9.jpg'
import code10 from '../assets/code10.webp'
import './mainpage.css'
import DisplayImage from './DisplayImage'
import { useState } from 'react'

let page=[
  {
    image : code1
  },
  {
    image : code2
  },
  {
    image : code3
  },
  {
    image : code4
  },
  {
    image : code5
  },
  {
    image : code6
  },
  {
    image : code7
  },
  {
    image : code8
  },
  {
    image : code9
  },
  {
    image : code10
  },
]

function MainPagination(){
  const[indexVisible, setIndexVisible] = useState(0)
  return(
    <section className='mainsection' >
      <h1>React Pagination</h1>
      <DisplayImage page={page} indexVisible={indexVisible} setIndexVisible={setIndexVisible} />
    </section>
  )
}

export default MainPagination