import PracticeTwo from './PracticeTwo'
import mountain from "/mountain.jpg"
import react from "../assets/react.svg"  
import water from "../assets/water.jpg"
import { useState } from 'react'

export const ChildComponent = () => {
    return(
        <>
          <p>I am the prop which is supposed to passed as a prop</p>
          <h2>Successfully Received By Other Component </h2>
        </>
    )
}

const PracticeFirst = () => {
    const[count,setCount] = useState(0)
    const handleIncrement = () => {
        setCount((prev)=>prev+1)
    }
    let data = (
        <div>
            <h3>I am From PracticeFirs Componenet</h3>
            <p>We Were Taken inside a variable</p>
        </div>
    )
  return (
    <>
      <h1>Let's Practice The Props concepts from very first</h1>
      <img src={mountain} alt="" />        
      <img src="/mountain.jpg" alt="" />
      <img src={react} alt="" />
      <img src={water} alt="" />
      <PracticeTwo
      name="aman"                                                                        //! passing string
      num={200}                                                                          //! Passing number
      isOn={true}                                                                        //todo Passing boolean value 
      content={ <p>Here We Have a paragraph content</p> }                                //! passing html tag with content
      data={data}                                                                        //! passing html tag by storing in a variable 
      component={<ChildComponent/>}                                                      //todo passing a entire component
      image="https://cdn.pixabay.com/photo/2025/05/30/17/15/mountain-9631829_640.jpg"    //! passing image with direct url
      image1="/bridge.jpg"     
      image3={water}    
      handleIncrement={handleIncrement}                                                  
      />
      <p>Count is {count}</p>
    </>
  )
}

export default PracticeFirst