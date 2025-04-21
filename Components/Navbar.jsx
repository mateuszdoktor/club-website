"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-white-no-bg.png";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-evenly items-center px-8 py-4 fixed top-0 left-0 z-50 bg-black/30">
      <div className="flex gap-16 text-4xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          News
        </Link>
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          Season
        </Link>
      </div>
      <div className="flex-shrink-0">
        <Image
          src={logo}
          alt="Real Madrid logo"
          width={75}
          height={75}
          className="object-contain"
        />
      </div>

      <div className="flex gap-16 text-4xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          Team
        </Link>
        <Link href="/" className="hover:text-blue-400 transition duration-300">
          Club
        </Link>
      </div>
    </nav>
  );
}
