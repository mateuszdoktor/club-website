"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/IMG_2739.JPG)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20 z-10" />

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center text-white text-center h-full px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-4">
          Welcome to the Club
        </h1>
        <p className="text-lg sm:text-xl max-w-xl opacity-90">
          Stay up to date with all the latest news and highlights.
        </p>
      </motion.div>
    </header>
  );
}
