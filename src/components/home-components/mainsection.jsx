import { motion } from "framer-motion";
import heroImage from "@/assets/HeroImg1.png";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-28 pt-28 pb-16 bg-black overflow-hidden">
      
      {/* Left side - Text */}
      <div className="flex-1 space-y-6 text-center md:text-left max-w-xl">

        {/* Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
        >
          Introducing the{" "}
          <span className="text-gray-300">iPhone 17 Pro</span> — Built for the{" "}
          <span className="text-gray-400">Future of Performance</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base md:text-lg text-justify"
        >
          Experience the next evolution of smartphone technology with iPhone 17 Pro.
          Powered by the latest Apple silicon, an advanced Pro camera system, and a
          stunning Super Retina display, it delivers unmatched performance,
          cinematic photography, and all-day battery life in a sleek titanium design.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore iPhone 17 Pro
          </button>
        </motion.div>

      </div>

      {/* Right side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center mt-12 md:mt-0"
      >
        <img
          src={heroImage}
          alt="iPhone 17 Pro"
          className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto object-contain"
        />
      </motion.div>

    </section>
  );
}