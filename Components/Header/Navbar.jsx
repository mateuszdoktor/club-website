"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo-white-no-bg.png";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left links */}
          <div className="hidden md:flex gap-8">
            <NavLink href="/">News</NavLink>
            <NavLink href="/">Season</NavLink>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Real Madrid logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Right links */}
          <div className="hidden md:flex gap-8">
            <NavLink href="/">Team</NavLink>
            <NavLink href="/">Club</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">
            <NavLink href="/">News</NavLink>
            <NavLink href="/">Season</NavLink>
            <NavLink href="/">Team</NavLink>
            <NavLink href="/">Club</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
