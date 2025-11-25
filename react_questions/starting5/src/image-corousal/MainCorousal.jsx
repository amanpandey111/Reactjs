import image1 from './images/image1.webp'
import image2 from './images/image2.webp'
import image3 from './images/image3.webp'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.webp'
import image10 from './images/image10.webp'
import DisplayImages from './DisplayImages'
import data from './data.json'
import './corousal.css'
import { useEffect, useRef, useState } from 'react'

// function MainCorousal(){
//   const[index, setIndex] = useState(0)
//   const[isHover, setIsHover] = useState(false)

//   function handleIncrement(){
//     setIndex((prev)=>{
//       if(prev===data.length-1) return 0
//       return prev+1
//     })
//   }

//   function handleDecrement(){
//     setIndex((prev)=>{
//       if(prev===0) return data.length-1
//       return prev-1
//     })
//   }

//   useEffect(()=>{
//     console.log("Hello")
//     if(isHover) return
//     let myInterval = setInterval(()=>{
//       setIndex((prev)=>{
//         if(prev===data.length-1) return 0
//         return prev+1
//       })
//     },2000) 
//     return () => clearInterval(myInterval)
//   },[isHover])
//   return(
//     <div className='container' >
//       <div className="left-btn"
//       onClick={handleDecrement}
//       > {"<"} </div>
//       <img src={data[index].download_url} alt="" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} />
//       <div className="right-btn"
//       onClick={handleIncrement}
//       > {">"} </div>
//     </div>
//   )
// }
// export default MainCorousal

function MainCorousal() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  function handleIncrement() {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function handleDecrement() {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  const startInterval = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      handleIncrement();
    }, 2000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  console.log(intervalRef)
  return (
    <div className="container">
      <div className="left-btn" onClick={handleDecrement}>
        {"<"}
      </div>

      <img
        src={data[index].download_url}
        alt=""
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
      />

      <div className="right-btn" onClick={handleIncrement}>
        {">"}
      </div>
    </div>
  );
}

export default MainCorousal;

