"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function TrophyCounter({ label, end, delay = 0.2 }) {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.6 },
        },
      }}
    >
      <h3 className="text-5xl font-black text-[#0055A4] mb-2">
        <CountUp end={end} duration={2} />
      </h3>
      <p className="text-lg font-medium text-neutral-700 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}
