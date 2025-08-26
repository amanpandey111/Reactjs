// //! importing states
// import { useState } from "react"

// //! importing files
// import "./styles.css"

// //! image imported
// import chipmunk from "./images/chipmunk.jpg"
// import deer from "./images/deer.jpg"
// import fuchs from "./images/fuchs.jpg"
// import iceland from "./images/iceland.jpg"
// import leopard from "./images/leopard.jpg"
// import raccon from "./images/raccon.jpg"

// //! importing icons
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

// //! taken imported images in array
// let images = [chipmunk,deer,fuchs,iceland,leopard,raccon]

// const ImageSlide = () => {
//     const[slider,setSlider] = useState(0)
//     function handlePrevious(){
//         if(slider==0){
//             setSlider(images.length-1)
//         }else{
//             setSlider((prev)=>prev-1)
//         }
//     }
//     function handleNext(){
//         if(slider==images.length-1){
//             setSlider(0)
//         }else{
//             setSlider((prev)=>prev+1)
//         }
//     }
//   return (
//     <div>
//         <FaChevronLeft fontSize="30px" style={{border:"2px solid", borderRadius:"50%", cursor:"pointer"}} onClick={()=>handlePrevious()} />
//         {
//             images.map((curEle,index)=>{
//                 console.log(index);
//                 return <img key={index} src={curEle} 
//                 className={slider==index ? "show-image" : "hide-image"}
//                 />
//             })
//         }
//         <FaChevronRight fontSize="30px" style={{border:"2px solid", borderRadius:"50%", cursor:"pointer"}} onClick={()=>handleNext()} />
//     </div>
//   )
// }

// export default ImageSlide


import { useState } from "react"
import "./styles.css"
import chipmunk from "./images/chipmunk.jpg"
import deer from "./images/deer.jpg"
import fuchs from "./images/fuchs.jpg"
import iceland from "./images/iceland.jpg"
import leopard from "./images/leopard.jpg"
import raccon from "./images/raccon.jpg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let images = [chipmunk, deer, fuchs, iceland, leopard, raccon];

const ImageSlide = () => {
    const [slider, setSlider] = useState(0);

    function handlePrevious() {
        setSlider(slider === 0 ? images.length - 1 : slider - 1);
    }

    function handleNext() {
        setSlider(slider === images.length - 1 ? 0 : slider + 1);
    }

    function handleSlider(index){
        setSlider(index)
    }

    return (
        <>
          <div className="image-slider-container">
                <FaChevronLeft className="icon-left" onClick={handlePrevious} />
                {
                    images.map((curEle, index) => (
                        <img
                            key={index}
                            src={curEle}
                            className={slider === index ? "show-image" : "hide-image"}
                        />
                    ))
                }
                <FaChevronRight className="icon-right" onClick={handleNext} /> <br /> <br />
          </div>
          <div className="flex gap-2 button-div" >
            {
                images.map((curEle,index)=>{
                    return <button key={index} onClick={()=>handleSlider(index)}
                    className={ `${index==slider ? "style-button" : "unstyle-button"} common-button` } ></button>
                })
            }
          </div>
        </>
    );
};

export default ImageSlide;