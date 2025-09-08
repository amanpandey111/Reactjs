import { motion } from "motion/react"
import { useRef } from "react"

const DragAxis = () => {
    const parentRef = useRef(null)
  return (
    <div ref={parentRef} className="w-[30%] h-130 border-2 bg-black m-auto flex justify-center items-center">
        <motion.div className="w-20 h-20 border-3 border-amber-600 bg-orange-300 cursor-pointer"
        drag="x"
        // dragConstraints={{ left:0, right:200 }}
        // dragConstraints={parentRef}
        dragConstraints={{ left:-200, right:200 }}
        whileDrag={{ scale:2 }}                      //! while drag
        transition={{ type:"spring", stiffness:300, damping:30 }}
        ></motion.div>
    </div>
  )
}

export default DragAxis