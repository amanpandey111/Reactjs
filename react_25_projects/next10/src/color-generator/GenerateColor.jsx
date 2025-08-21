// import { useEffect, useState } from "react"

// const GenerateColor = () => {
//     const [typeOfColor, setTypeOfColor] = useState("hex")
//     const [color,setColor] = useState("#725a5aff")

//     function randomColorUtility(length){
//         let v = Math.floor(Math.random()*length)
//         return v
//     }
//     function randomHex(){
//         console.log("genarating hex");
//         const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//         let hexColor = "#";
//         for(let i=0; i<6; i++){
//             hexColor += hex[randomColorUtility(hex.length)]
//         }
//         setColor(hexColor)
//     }
//     function randomRgb(){
//         console.log("genarating rgb");
//         const r = randomColorUtility(255)
//         const g = randomColorUtility(255)
//         const b = randomColorUtility(255)
//         setColor(`rgb(${r},${g},${b})`)
//     }
//     useEffect(()=>{
//         if(typeOfColor=='hex'){
//             randomHex()
//         }else{
//             randomRgb()
//         }
//     },[typeOfColor])
//   return (
//     <div className="flex justify-center items-start gap-3 p-2 h-[100vh]" 
//     style={{backgroundColor:color}}
//     >
//         <button 
//         className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer "
//         onClick={()=>setTypeOfColor("hex")}
//         >Create Hex Color</button>

//         <button 
//         className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer "
//         onClick={()=>setTypeOfColor("rgb")}
//         >Create RGB Color</button>

//         <button
//         className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer"
//         onClick={()=> typeOfColor=="hex" ? randomHex() : randomRgb() }
//         >Generate Random Color</button>

//         <div className="border-2 text-[white]" >
//             <p className="text-xl" >{typeOfColor=="hex"?`Hex Color ${color}`:`RGB color ${color}`}</p>
//         </div>
//     </div>
//   )
// }

// export default GenerateColor




import { useEffect, useState } from "react";

const GenerateColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#725a5aff");

  // Helper function to generate a random number
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Random HEX color generation
  function randomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }

  // Random RGB color generation
  function randomRgb() {
    const r = randomColorUtility(256); // 256 for 0-255 range
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    return `rgb(${r},${g},${b})`;
  }

  // ✨ NEW: Convert a Hex color to an RGB string
  function hexToRgb(hex) {
    // Remove the # and any alpha channel
    const cleanHex = hex.slice(1, 7);
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // ✨ NEW: Convert an RGB string to a Hex color
  function rgbToHex(rgb) {
    // Extract numbers from the rgb string
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    console.log(match);
    if (!match) return;

    const [r, g, b] = match.slice(1).map(Number);
    
    // Convert to hex and pad with leading zero if needed
    const toHex = (c) => `0${c.toString(16)}`.slice(-2).toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  
  // ✨ Updated useEffect logic to perform conversion
  useEffect(() => {
    if (typeOfColor === "hex" && color.startsWith("rgb")) {
      setColor(rgbToHex(color));
    } else if (typeOfColor === "rgb" && color.startsWith("#")) {
      setColor(hexToRgb(color));
    }
  }, [typeOfColor, color]);

  // Handler for the "Generate Random Color" button
  function handleGenerateRandomColor() {
    if (typeOfColor === "hex") {
      setColor(randomHex());
    } else {
      setColor(randomRgb());
    }
  }

  return (
    <div
      className="flex justify-center items-start gap-3 p-2 h-[100vh]"
      style={{ backgroundColor: color }}
    >
      <button
        className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer"
        onClick={() => setTypeOfColor("hex")}
      >
        Create Hex Color
      </button>

      <button
        className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>

      <button
        className="border-2 border-[#6E2E0D] bg-[#6E2E0D] text-[#DDD3CD] p-1 cursor-pointer"
        onClick={handleGenerateRandomColor}
      >
        Generate Random Color
      </button>

      <div className="border-2 text-[white]">
        <p className="text-xl">
          {typeOfColor === "hex" ? `Hex Color ${color}` : `RGB color ${color}`}
        </p>
      </div>
    </div>
  );
};

export default GenerateColor;