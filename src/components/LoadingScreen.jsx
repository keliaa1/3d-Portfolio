import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20); // 20ms * 100 = 2000ms duration roughly

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500); // Small delay after reaching 100% before triggering exit
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="flex flex-col items-center">
        {/* Animated Name/Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 overflow-hidden"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
            KELIA
            <span className="text-[#00d2ff]">.</span>
          </h1>
        </motion.div>

        {/* Counter */}
         <div className="flex items-end gap-2 overflow-hidden h-[40px]">
             <motion.span
                className="text-xl font-bold text-white/50"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
             >
                Loading
             </motion.span>
             <motion.span
                className="text-4xl font-black text-white"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
             >
                {count}%
             </motion.span>
         </div>

         {/* Progress Bar Line */}
         <div className="mt-4 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
            />
         </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
