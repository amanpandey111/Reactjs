import { useReducer, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { toggleReducer } from "../reducer/toggle-reducer";

const countVariants: Variants = {
  initial: (isIncrease: boolean) => ({
    y: isIncrease ? 15 : -15,
    opacity: 0,
    scale: 0.85,
    textShadow: isIncrease
      ? "0px 0px 20px rgba(74, 222, 128, 0.9)"
      : "0px 0px 20px rgba(248, 113, 113, 0.9)",
    color: isIncrease ? "#4ade80" : "#f87171",
  }),
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    color: "#f3f4f6", // gray-100
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Apple-like ease-out
    },
  },
  exit: (isIncrease: boolean) => ({
    y: isIncrease ? -15 : 15,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Toggle = ({ reducer = toggleReducer }) => {
  const [state, dispatch] = useReducer(reducer, { on: false, clicks: 0 });
  const { on, clicks } = state;
  const prevClicksRef = useRef(clicks);

  useEffect(() => {
    prevClicksRef.current = clicks;
  }, [clicks]);

  const isIncrease = clicks >= prevClicksRef.current;

  function handleToggle() {
    dispatch({ type: "toggle" });
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-sm mx-auto border border-white/10 backdrop-blur-xl relative overflow-hidden group">
      
      {/* Background Glow Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/20 blur-[80px] rounded-full transition-opacity duration-700 ${on ? 'opacity-100' : 'opacity-0'}`} />

      {/* Header section */}
      <div className="text-center space-y-2 mb-10 relative z-10">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
          System Control
        </h2>
        <p className="text-gray-400 text-sm font-medium">Manage operational state</p>
      </div>

      {/* Main Toggle Area */}
      <div className="w-full flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 mb-8 shadow-inner relative z-10 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Status</span>
          <AnimatePresence mode="popLayout">
            <motion.span
              key={on ? "active" : "inactive"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className={`font-bold text-lg ${on ? 'text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'text-gray-400'}`}
            >
              {on ? 'ACTIVE' : 'INACTIVE'}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* The Switch */}
        <motion.button
          layout
          onClick={handleToggle}
          className={`relative flex h-10 w-20 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 shadow-inner focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 ${
            on ? "bg-indigo-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]" : "bg-gray-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            layout
            initial={false}
            animate={{
              x: on ? 40 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className={`h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center ${on ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={on ? "on" : "off"}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
                className={`h-3 w-3 rounded-full ${on ? 'bg-indigo-500' : 'bg-gray-400'}`}
              />
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </div>

      {/* Footer Area with Stats & Reset */}
      <div className="flex w-full items-end justify-between pt-4 border-t border-white/10 relative z-10">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Engagements</span>
          <div className="flex items-baseline space-x-1 overflow-hidden p-1 -m-1">
            <AnimatePresence mode="popLayout" custom={isIncrease}>
              <motion.span
                key={clicks}
                custom={isIncrease}
                variants={countVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-3xl font-black tabular-nums inline-block"
              >
                {clicks}
              </motion.span>
            </AnimatePresence>
            <span className="text-sm text-gray-500 font-medium ml-1">clicks</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch({ type: "reset" })}
          className="px-5 py-2.5 bg-red-500/10 text-red-400 hover:text-white rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
        >
          Reset
        </motion.button>
      </div>

    </div>
  );
};

export default Toggle;
