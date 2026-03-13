import { motion } from "framer-motion";
import iphoneImage from "@/assets/iphone17.png";

export default function ProductShowcase() {
  return (
    <section className="w-full bg-black px-6 md:px-20 lg:px-32 py-20">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Left - Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center w-full md:w-1/2"
        >
          <img
            src={iphoneImage}
            alt="iPhone 17 Pro"
            className="w-70 sm:w-85 md:w-95 lg:w-107.5 h-auto object-contain"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          
          {/* Title */}
          <h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
          >
            Meet the{" "}
            <span className="text-gray-300">iPhone 17 Pro</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-gray-400 text-lg md:text-xl font-medium">
            Precision. Power. Perfection.
          </h3>

          {/* Paragraph */}
          <p className="text-gray-400 text-base md:text-lg max-w-lg">
            Designed for those who demand the best, the iPhone 17 Pro combines
            cutting-edge Apple silicon, an advanced Pro camera system, and a
            breathtaking Super Retina display. Built with premium materials and
            engineered for peak performance, it redefines what a smartphone can
            do.
          </p>

          {/* Button */}
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Discover iPhone 17 Pro
          </button>

        </motion.div>

      </div>

    </section>
  );
}