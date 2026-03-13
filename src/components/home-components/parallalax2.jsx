import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import iphoneCamera from "@/assets/iphoneCamera.png";

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
      className="relative w-full bg-black min-h-[120vh] flex items-center justify-center overflow-hidden"
    >
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