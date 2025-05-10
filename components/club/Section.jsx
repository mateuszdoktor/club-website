"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Section({
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 my-24 px-6 max-w-7xl mx-auto`}
    >
      <motion.div className="lg:w-1/2 space-y-6" variants={textVariants}>
        <motion.h2
          className="text-4xl font-black text-neutral-900"
          variants={textVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-700 leading-relaxed"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </motion.div>

      <motion.div className="lg:w-1/2" variants={imageVariants}>
        <motion.img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg object-cover border border-neutral-200 transition-transform duration-500 hover:scale-[1.02]"
          whileHover={{ scale: 1.03 }}
        />
      </motion.div>
    </motion.section>
  );
}
