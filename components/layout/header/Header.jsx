"use client";

import Image from "next/image";
import Navbar from "./navbar/Navbar";
import HeroText from "./HeroText";

export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <Image
        src="/IMG_2739.JPG"
        alt=""
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20 z-10" />
      <Navbar />
      <HeroText />
    </header>
  );
}
