"use client";
import { motion } from "framer-motion";

const fadeIn = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

export default function Section({
  title,
  description,
  image,
  reverse = false,
  delay = 0.2,
}) {
  return (
    <motion.section
      variants={fadeIn(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 my-24 px-6 max-w-7xl mx-auto`}
    >
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-3xl shadow-xl object-cover border border-gray-200 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.section>
  );
}
