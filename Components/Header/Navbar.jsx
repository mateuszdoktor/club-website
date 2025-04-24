"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import logo from "@/public/logo-white-no-bg.png";
import NavLink from "./NavLink";

const navLinks = [
  { href: "/", label: "News" },
  { href: "/", label: "Season" },
  { href: "/", label: "Team" },
  { href: "/", label: "Club" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(2).map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden flex flex-col items-center gap-4 overflow-hidden bg-black/80 backdrop-blur-sm py-4"
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
