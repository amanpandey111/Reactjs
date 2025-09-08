import { motion } from "motion/react"

const KeyFrame1 = () => {
  return (
    <div className="w-[30%] h-130 border-2 bg-black m-auto flex justify-center items-center" >
        <motion.div className="w-20 h-20 border-3 border-amber-600 bg-amber-600 cursor-pointer"
        animate={{ 
            scale:[1,2,2,1,1],
            rotate:[0,0,360,0,-360],
            borderRadius:["0%","0%","50%","50%","0%"]
         }}
        transition={{duration:4}}
        ></motion.div>
    </div>
  )
}

export default KeyFrame1