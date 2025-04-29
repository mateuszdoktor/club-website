"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
      className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md text-gray-900 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Left links */}
        <div className="hidden md:flex flex-1 justify-start gap-6">
          <NavbarLinks links={navLinks.slice(0, 2)} solid />
        </div>

        {/* Center logo */}
        <div className="flex-shrink-0">
          <NavbarLogo isSolid />
        </div>

        {/* Right: links + auth */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="hidden md:flex gap-6">
            <NavbarLinks links={navLinks.slice(2)} solid />
          </div>

          {/* Auth */}
          {session ? (
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <button className="flex items-center gap-2 rounded-full p-1.5 transition hover:bg-gray-100">
                <img
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </button>

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
                      <p className="text-sm font-medium">
                        {session.user?.name}
                      </p>
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
          ) : (
            <button
              onClick={() => signIn()}
              className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium transition bg-gray-900 text-white hover:bg-gray-700"
            >
              Sign In
            </button>
          )}

          {/* Mobile menu toggle */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu links={navLinks} isSolid />}
      </AnimatePresence>
    </motion.nav>
  );
}
