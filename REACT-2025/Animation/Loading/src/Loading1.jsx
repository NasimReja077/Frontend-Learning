import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = ["S", "A", "N", "E", "L"];

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // How many letters to show based on %
  const visibleLetters = Math.ceil((progress / 100) * letters.length);

  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center text-white">
      
      {/* Letters */}
      <div className="flex gap-4 mb-10">
        {letters.map((letter, index) => {
          const isVisible = index < visibleLetters;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.1, y: 40 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-20 h-20 border border-gray-500 flex items-center justify-center text-3xl font-bold"
            >
              {letter}
            </motion.div>
          );
        })}
      </div>

      {/* Loading Percentage */}
      <motion.div
        key={progress}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-400 text-lg"
      >
        loading... {progress}%
      </motion.div>
    </div>
  );
};

export default LoadingPage;