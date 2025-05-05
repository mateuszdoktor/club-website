"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/", label: "Season" },
  { href: "/team", label: "Team" },
  { href: "/club", label: "Club" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      if (isOpen) return;
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setShowNavbar(currentY < 100 || currentY < lastY);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const AuthButton = useCallback(() => {
    if (!session) {
      return (
        <button
          onClick={() => signIn()}
          className={clsx(
            "hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium transition",
            scrolled
              ? "bg-gray-900 text-white hover:bg-gray-700"
              : "bg-white/20 text-white hover:bg-white/30"
          )}
        >
          Sign In
        </button>
      );
    }

    return (
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setShowUserMenu(true)}
        onMouseLeave={() => setShowUserMenu(false)}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 rounded-full p-1.5 transition hover:bg-white/10"
        >
          <img
            src={session.user?.image || "/default-avatar.png"}
            alt="avatar"
            className="w-11 h-11 rounded-full object-cover"
          />
        </motion.button>
        <AnimatePresence>
          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-48 rounded-lg shadow-xl bg-white text-gray-900 overflow-hidden z-50"
            >
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium">{session.user?.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {session.user?.email}
                </p>
              </div>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm"
              >
                Sign Out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }, [session, scrolled, showUserMenu]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
          scrolled
            ? "bg-white backdrop-blur-md text-gray-900 border-gray-200"
            : "bg-transparent text-white border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div className="hidden md:flex flex-1 justify-start gap-6">
            <NavbarLinks links={navLinks.slice(0, 2)} solid={scrolled} />
          </div>
          <NavbarLogo isSolid={scrolled} />
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden md:flex gap-6">
              <NavbarLinks links={navLinks.slice(2)} solid={scrolled} />
            </div>
            <AuthButton />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X
                  size={28}
                  className={scrolled ? "text-gray-900" : "text-white"}
                />
              ) : (
                <Menu
                  size={28}
                  className={scrolled ? "text-gray-900" : "text-white"}
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
