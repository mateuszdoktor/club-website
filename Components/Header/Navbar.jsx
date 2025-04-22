"use client";

import Image from "next/image";
import logo from "@/public/logo-white-no-bg.png";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-evenly items-center px-8 py-4 fixed top-0 bg-black/40 z-50">
      <div className="flex gap-16">
        <NavLink href="/">News</NavLink>
        <NavLink href="/">Season</NavLink>
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

      <div className="flex gap-16">
        <NavLink href="/">Team</NavLink>
        <NavLink href="/">Club</NavLink>
      </div>
    </nav>
  );
}
