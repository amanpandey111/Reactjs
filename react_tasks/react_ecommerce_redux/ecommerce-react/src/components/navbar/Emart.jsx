import React, { useRef, useState } from 'react'
import Mobile from './accessories/Mobile'
import Computer from './accessories/Computer'
import Watch from './accessories/Watch'
import MenWear from './accessories/MenWear'
import WomenWear from './accessories/WomenWear'
import Furniture from './accessories/Furniture'
import Kitchen from './accessories/Kitchen'
import Book from './accessories/Book'
import Fridge from './accessories/Fridge'
import Speaker from './accessories/Speaker'
import Ac from './accessories/Ac'
import Tv from './accessories/Tv'

const Emart = () => {

  // console.log(refTrue.current);
  const [isTvDirect, setIsTvDirect] = useState(false);
  return (
    <>
      <Mobile isDirect={isTvDirect}/>
      <br />
      <Computer isDirect={isTvDirect}/>
      <br />
      <Watch isDirect={isTvDirect} />
      <br />
      <MenWear isDirect={isTvDirect}/>
      <br />
      <WomenWear isDirect={isTvDirect}/>
      <br />
      <Furniture isDirect={isTvDirect}/>
      <br />
      <Kitchen isDirect={isTvDirect}/>
      <br />
      <Book isDirect={isTvDirect}/>
      <br />
      <Fridge isDirect={isTvDirect}/>
      <br />
      <Speaker isDirect={isTvDirect}/>
      <br />
      <Ac isDirect={isTvDirect}/>
      <br />
      <Tv isDirect={isTvDirect} />
    </>
  )
}

export default Emart