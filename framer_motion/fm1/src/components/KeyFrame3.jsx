import { motion } from "motion/react"

// const KeyFrame3 = () => {
//   return (
//     <div className="w-[30%] h-130 border-2 bg-black m-auto flex justify-center items-center" >
//         <motion.div className="inline w-8 h-8 "
//         animate={{
//             borderBottom:["2px solid green"]
//         }}
//         transition={{

//         }}
//         ></motion.div>
//         <motion.div className="inline w-8 h-8"
//         animate={{
//             translateY:-30,
//             borderBottom:"2px solid green"
//         }}
//         ></motion.div>
//         <motion.div className="inline w-8 h-8 "
//         animate={{
//             translateY:-60,
//             borderBottom:"2px solid green"
//         }}
//         ></motion.div>
//         <motion.div className="inline w-8 h-8"
//         animate={{
//             translateY:-90,
//             borderBottom:"2px solid green"
//         }}
//         ></motion.div>
//         <motion.div className="inline w-8 h-8"
//         animate={{
//             translateY:-120,
//             borderBottom:"2px solid green"
//         }}
//         ></motion.div>
//     </div>
//   )
// }

const KeyFrame3 = () => {
    return (
        <div className="relative h-60 w-60 bg-gray-900 flex items-center justify-center">
            {/* Main animated square */}
            <motion.div
                className="h-10 w-10 absolute bg-white"
                animate={{
                    opacity: [0.5, 1, 0.5],
                    transform: [
                        "translate(-80px, 80px) scale(1) rotate(0deg)",
                        "translate(0px, 0px) scale(1.2) rotate(180deg)",
                        "translate(80px, -80px) scale(1) rotate(360deg)",
                        "translate(-80px, 80px) scale(1) rotate(0deg)",
                    ],
                }}
                transition={{
                    duration: 6,
                    ease: "backInOut",
                    times: [0, 0.3, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />

            {/* Smaller bars animation */}
            {[0, 1, 2, 3, 4].map((n) => (
                <motion.div
                    key={n}
                    className="h-1.5 w-10 absolute bg-white"
                    animate={{
                        transform: [
                            `translate(${-80 + n * 40}px, 102px)`,
                            `translate(${-80 + n * 40}px, ${102 - n * 40}px)`,
                            `translate(${-80 + n * 40}px, 102px)`,
                        ],
                    }}
                    transition={{
                        duration: 6,
                        ease: "backInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                />
            ))}
        </div>
    );
}

export default KeyFrame3