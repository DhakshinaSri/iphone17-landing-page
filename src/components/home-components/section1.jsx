import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@components/common-components/Button";

export default function ProgramSection() {
  return (
    <section className="w-full items-center justify-between px-6 md:px-20 lg:px-32 py-0 pt-15 bg-white overflow-hidden">
      <div className="text-center md:text-left">

        {/* Subheading - from left */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-[#E4983A] leading-tight text-left pb-6"
        >
          Internship Opportunities
        </motion.h2>

        {/* Main Heading - from right */}
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-left pb-6"
        >
          Empowering You with{" "}
          <span className="text-[#E4983A]"> Real-World Experience</span> and Industry-Ready Skills
        </motion.h2>

        {/* Description - from left */}
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-gray-600 text-base md:text-lg lg:w-2/3 text-justify pb-6"
        >
          At Skill Hive, we provide structured programs that bridge the gap between academic learning and professional expertise. Our initiatives are designed to give students, recent graduates, and job seekers hands-on experience, mentorship, and certifications in high-demand sectors like Healthcare, Artificial Intelligence, IT, Life Sciences, and allied industries...{" "}
          <Link
            to="/internship"
            className="font-bold text-[#E4983A] hover:text-[#E4983A70] transition duration-150"
          >
            Learn More
          </Link>
        </motion.p>

        {/* Button - from right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Button text="Apply Now" to="/internship" />
        </motion.div>

      </div>
    </section>
  );
}
