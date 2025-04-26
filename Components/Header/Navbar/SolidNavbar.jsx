"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/", label: "Season" },
  { href: "/", label: "Team" },
  { href: "/", label: "Club" },
];

export default function SolidNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      setShowNavbar(!scrollingDown || currentScrollY < 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-white text-gray-900 shadow-sm backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavbarLinks links={navLinks.slice(0, 2)} solid={true} />
        <NavbarLogo isSolid={true} />
        <NavbarLinks links={navLinks.slice(2)} solid={true} />

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <X size={28} className="text-gray-900" />
          ) : (
            <Menu size={28} className="text-gray-900" />
          )}
        </button>
      </div>

      {isOpen && <MobileMenu links={navLinks} isSolid={true} />}
    </motion.nav>
  );
}
