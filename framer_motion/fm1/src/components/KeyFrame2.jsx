import { motion } from "motion/react"

const KeyFrame2 = () => {
    return (
        <div className="w-[30%] h-130 border-2 bg-black m-auto flex justify-center items-center" >
            <motion.div className="w-13 h-13 border-3 border-orange-300 bg-orange-300 cursor-pointer"
                animate={{
                    // borderRadius:[0,0]
                    background: [
                        "#ffffff56",
                        "#84f26a56",
                        "#ffffff56",
                        "#ff7e7e56",
                        "#ffffff56",
                    ],
                    border: [
                        "2px solid #ffffff",
                        "4px solid #84f26a",
                        "2px solid #ffffff",
                        "4px solid #ff7e7e",
                        "2px solid #ffffff",
                    ],
                    scale: [1, 1.7, 1, 1.7, 1],
                    x: [0, 20, 0, -20, 0],
                    rotate: [0, 45, 0, -45, 0],
                    borderRadius: [0, "50%", 0, "50%", 0]
                }}
                transition={{
                    duration: 3,
                    // delay:3
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity
                }}
            ></motion.div>
        </div>
    )
}

export default KeyFrame2