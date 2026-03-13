import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@assets/DialogBox.png";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-0 bg-white overflow-hidden">
      
      {/* Left side - Heading */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="md:w-[25%] text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold pb-6 leading-tight">
          About Us
        </h1>
      </motion.div>

      {/* Middle - Paragraph */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="md:w-[45%] text-center md:text-left space-y-6"
      >
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          International Society for Healthcare & AI Innovators (ISHAI) is a global non-profit
          dedicated to connecting academia, industry, and research. We empower students, professionals,
          and institutions through skill development, innovation platforms, global collaborations,
          and career pathways in Healthcare and Artificial Intelligence...{" "}
          <Link
            to="/about"
            className="font-bold text-[#E4983A] hover:text-[#E4983A70] transition duration-150"
          >
            Read More
          </Link>
        </p>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="md:w-[30%] flex justify-center"
      >
        <img
          src={heroImage}
          alt="AI Innovator"
          className="w-64 md:w-80 h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
