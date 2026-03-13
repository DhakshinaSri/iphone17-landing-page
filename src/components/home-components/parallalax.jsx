import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import iphoneCamera from "@/assets/iphoneCamera2.png";

export default function CameraParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // Zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-black min-h-[120vh] flex flex-col items-center justify-center overflow-hidden text-center"
    >
      
      {/* Text FIRST */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-16"
      >
        Powerful Camera
      </motion.h2>

      {/* Phone Image */}
      <motion.img
        src={iphoneCamera}
        alt="iPhone 17 Pro Camera"
        style={{ y, scale }}
        className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] object-contain"
      />

    </section>
  );
}