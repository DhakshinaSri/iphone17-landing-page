import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrecisionWords() {
  const words = ["Precision.", "Power.", "Perfection."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black flex items-center justify-center py-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center"
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </section>
  );
}