"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import AuthButton from "./AuthButton";

const navLinks = [
  { href: "/news", label: "NEWS" },
  { href: "/season", label: "SEASON" },
  { href: "/team", label: "TEAM" },
  { href: "/club", label: "CLUB" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setShowNavbar(currentY < 100 || currentY < lastY);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] isolate pointer-events-auto transition-colors duration-300 border-b shadow-sm",
          scrolled
            ? "bg-white/95 backdrop-blur-md text-neutral-900 border-neutral-200"
            : "bg-transparent text-white border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="hidden md:flex flex-1 justify-start gap-8">
            <NavbarLinks links={navLinks.slice(0, 2)} solid={scrolled} />
          </div>
          <NavbarLogo isSolid={scrolled} />
          <div className="flex flex-1 justify-end items-center gap-6">
            <div className="hidden md:flex gap-8">
              <NavbarLinks links={navLinks.slice(2)} solid={scrolled} />
            </div>
            <AuthButton scrolled={scrolled} />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X
                  size={28}
                  className={scrolled ? "text-neutral-900" : "text-white"}
                />
              ) : (
                <Menu
                  size={28}
                  className={scrolled ? "text-neutral-900" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu links={navLinks} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
