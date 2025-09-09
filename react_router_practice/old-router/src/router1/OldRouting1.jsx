import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const OldRouting1 = () => {
  return (
    <BrowserRouter>
       <nav>
         <Link to="/" >Home</Link> <br />
         <Link to="/about" >About</Link> <br />
         <Link to="/contact" >Contact</Link> <br />
       </nav>
       
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default OldRouting1


function Home(){
    return <h1>I am At Home</h1>
}

function About(){
    return <h1>I am At About Page</h1>
}

function Contact(){
    return <h1>We Can Contact Here</h1>
}

function Products(){
    return <h1>Here We Have Producs Details</h1>
}