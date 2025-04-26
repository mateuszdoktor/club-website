"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/", label: "Season" },
  { href: "/", label: "Team" },
  { href: "/", label: "Club" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      setScrolledPastHero(currentScrollY > window.innerHeight * 0.6);
      setShowNavbar(!scrollingDown || currentScrollY < 100);

      lastScrollY = currentScrollY;
    };

    const handleScroll = () => requestAnimationFrame(updateNavbar);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = scrolledPastHero;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -80, opacity: showNavbar ? 1 : 0 }}
      transition={{
        y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.4, ease: "easeInOut" },
      }}
      className={clsx(
        "fixed top-0 w-full z-50 transition-[background-color] duration-500 ease-in-out backdrop-blur-xs",
        isSolid
          ? "bg-white/100 text-gray-900 shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative">
        {/* LEFT LINKS */}
        <div className="flex items-center space-x-8">
          <NavbarLinks links={navLinks.slice(0, 2)} solid={isSolid} />
        </div>

        {/* LOGO CENTER */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <NavbarLogo isSolid={isSolid} />
        </motion.div>

        {/* RIGHT LINKS / MOBILE MENU */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <NavbarLinks links={navLinks.slice(2)} solid={isSolid} />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X
                size={28}
                className={isSolid ? "text-gray-900" : "text-white"}
              />
            ) : (
              <Menu
                size={28}
                className={isSolid ? "text-gray-900" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MobileMenu links={navLinks} isSolid={isSolid} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
