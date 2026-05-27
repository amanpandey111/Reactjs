import { startTransition, useOptimistic, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LikeButton = ({ postId, initialLikes = 0 }) => {
    const [likes, setLikes] = useState(initialLikes)
    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (currentLikes: number, delta: number) => currentLikes + delta)

    const sendLikeToServer = async (postId: number) => {
        await new Promise((r) => setTimeout(r, 2000));
        if (Math.random() < 0.2) throw new Error('Network Error Occured')

        return { success: true }
    }

    const handleLike = async () => {
        addOptimisticLike(1)
        try {
            await sendLikeToServer(postId);
            setLikes((prev) => prev + 1)
        } catch (error) {

            setLikes((s) => s)
        }
    }
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <motion.button
                whileTap={{ scale: 0.95 }}
                // onClick={handleLike}
                onClick={() => startTransition(async() => handleLike())}
                className="
                flex
                items-center
                gap-3 px-8 py-4
                rounded-2xl bg-white
                border border-gray-100
                shadow-[0_10px_20px_rgba(0,0,0,0.05)]
                transition-shadow group
                cursor-pointer
                "
            >
                {/* The Heart: Pops every time optimisticLikes changes */}
                <motion.span
                    key={optimisticLikes + "-heart"}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-3xl filter drop-shadow-sm"
                >
                    ❤️
                </motion.span>

                {/* The Number: Slides up and fades in */}
                <div className="h-8 overflow-hidden relative min-w-[20px]">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={optimisticLikes}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "backOut" }}
                            className="text-2xl font-bold text-gray-800 block"
                        >
                            {optimisticLikes}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.button>
        </div>
    )
}

export default LikeButton;
