"use client";
import { motion } from "framer-motion";

export default function HorizontalTimelineItem({ year, event }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl border border-neutral-200 p-6 shadow-md mx-4 scroll-mx-4 snap-center transition-transform duration-300"
    >
      <h4 className="text-2xl font-bold text-[#0055A4] mb-2">{year}</h4>
      <p className="text-neutral-600 text-base">{event}</p>
    </motion.div>
  );
}
