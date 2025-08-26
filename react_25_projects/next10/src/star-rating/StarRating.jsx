// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css';

// export default function StarRating({ noOfStars = 5 }) {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   function handleClick(getCurrentIndex) {
//     setRating(getCurrentIndex);
//   }

//   function handleMouseEnter(getCurrentIndex) {
//     setHover(getCurrentIndex);
//   }

//   function handleMouseLeave() {
//     setHover(rating);
//   }

//   return (
//     <div className="star-rating">
//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1;

//         return (
//           <FaStar
//             key={index}
//             className={index <= (hover || rating) ? "active" : "inactive"}
//             onClick={() => handleClick(index)}
//             onMouseMove={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave()}
//             size={40}
//           />
//         );
//       })}
//     </div>
//   );
// }



import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating(){
    const[rindex,setRindex] = useState(-1)
    const[hover, setHover] = useState(-1)
    function handleClick(id){
        console.log(id);
        setRindex(id)
    }
    function handleMove(id){
        setHover(id)
    }
    function handleLeave(){
        setHover(rindex)
    }
    return(
        <div className="flex gap-1" >
            {
                [...Array(5)].map((_,index)=>{
                    index+=1
                    return <FaStar key={index} fontSize="40px"
                    onClick={()=>handleClick(index)}
                    className={ index <= (hover || rindex) ? "active" : "inactive" }
                    onMouseMove={()=>handleMove(index)}
                    onMouseLeave={handleLeave}
                    />
                })
            }
        </div>
    )
}