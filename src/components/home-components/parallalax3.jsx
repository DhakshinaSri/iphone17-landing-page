import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import iphoneRotate from "@/assets/iphoneRotate.png";

export default function RotateParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Rotation animation
  const rotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 90]);

  // Parallax movement after rotation
  const y = useTransform(scrollYProgress, [0.6, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="relative h-[200vh] bg-black flex items-center justify-center"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        
        <motion.img
          src={iphoneRotate}
          alt="iPhone 17 Pro"
          style={{ rotate, y }}
          className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px] object-contain"
        />

      </div>
    </section>
  );
}