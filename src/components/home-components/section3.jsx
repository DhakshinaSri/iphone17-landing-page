import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import checkIcon from "@elements/checkbox.png";

const perks = [
  {
    title: "Internship Programs",
    description:
      "Gain practical experience by working on live industry projects. Collaborate with global companies and domain experts. Build a portfolio of work that enhances employability.",
  },
  {
    title: "Practical Training Sessions",
    description:
      "Learn cutting-edge tools and technologies used in real workplaces. Participate in workshops, simulations, and skill-based exercises. Receive guidance from experienced professionals in your field.",
  },
  {
    title: "Certification Courses",
    description:
      "Earn recognized certifications upon program completion. Boost your profile with skills validated by industry standards. Showcase your expertise to prospective employers.",
  },
  {
    title: "Mentorship & Guidance",
    description:
      "Connect with industry leaders and academic mentors. Receive personalized career advice and guidance. Build long-term professional networks.",
  },
];

export default function ProgramPerks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // delay each item
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 lg:px-32 py-0 pt-15 pb-16 bg-[#e0b7811d] border-t-6 border-[#ebcda5]"
    >
      <div className="w-full mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our Program Includes
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <img
                src={checkIcon}
                alt="check icon"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#E68100]">
                  {perk.title}
                </h3>
                <p className="text-gray-700 mt-1 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
