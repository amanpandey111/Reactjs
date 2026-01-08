// import { useState } from "react"

// const ToggleTracker = () => {
//   const[isToggle, setIsToggle] = useState(false);
//   return (
//     <div className="w-15 h-7 bg-amber-600 rounded-2xl" >
//       <div className="w-[55%] h-full bg-black rounded-2xl cursor-pointer" ></div>
//     </div>
//   )
// }

// export default ToggleTracker

import { useState } from "react";

const ToggleTracker = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div
      className={`w-15 h-7 rounded-2xl p-1 cursor-pointer transition-colors duration-300
        ${isToggle ? "bg-green-500" : "bg-amber-600"}`}
      onClick={() => setIsToggle(!isToggle)}
    >
      <div
        className={`h-full w-1/2 bg-black rounded-2xl transition-transform duration-300
          ${isToggle ? "translate-x-full" : "translate-x-0"}`}
      />
    </div>
  );
};

export default ToggleTracker;
