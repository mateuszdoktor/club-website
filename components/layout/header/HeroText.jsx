"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-20 flex flex-col items-center justify-center text-white text-center h-full px-6"
    >
      <h1 className="text-5xl sm:text-7xl font-black tracking-tight drop-shadow-lg mb-6 uppercase">
        Hala Madrid
      </h1>
      <p className="text-xl sm:text-2xl max-w-2xl opacity-90 font-medium">
        Stay up to date with all the latest news and highlights.
      </p>
    </motion.div>
  );
}
