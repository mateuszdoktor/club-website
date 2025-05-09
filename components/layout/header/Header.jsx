"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import HeroText from "./HeroText";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/IMG_2739.JPG"
        alt="Hero background"
        fill
        priority
        placeholder="blur"
        blurDataURL="/IMG_2739.JPG"
        onLoad={() => setLoaded(true)} 
        className={`object-cover object-center z-0 transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex flex-col"
      >
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
        <Navbar />
        <HeroText />
      </motion.div>
    </div>
  );
}
