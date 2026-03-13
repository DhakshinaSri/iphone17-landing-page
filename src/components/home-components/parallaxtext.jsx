import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="w-full bg-black py-24 flex items-center justify-center text-center overflow-hidden"
    >
      <motion.h2
        style={{ y }}
        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide"
      >
        Powerful Camera
      </motion.h2>
    </section>
  );
}