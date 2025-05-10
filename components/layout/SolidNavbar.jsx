"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "./header/navbar/NavbarLogo";
import NavbarLinks from "./header/navbar/NavbarLinks";
import MobileMenu from "./header/navbar/MobileMenu";

const navLinks = [
  { href: "/news", label: "NEWS" },
  { href: "/season", label: "SEASON" },
  { href: "/team", label: "TEAM" },
  { href: "/club", label: "CLUB" },
];

export default function SolidNavbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY;

      setShowNavbar(!scrollingDown || currentY < 100);
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 z-[999] isolate w-full bg-white/95 backdrop-blur-md text-neutral-900 border-b border-neutral-200 pointer-events-auto shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="hidden md:flex flex-1 justify-start gap-8">
            <NavbarLinks links={navLinks.slice(0, 2)} solid />
          </div>

          <NavbarLogo isSolid />

          <div className="flex flex-1 justify-end items-center gap-6">
            <div className="hidden md:flex gap-8">
              <NavbarLinks links={navLinks.slice(2)} solid />
            </div>

            {session ? (
              <div
                className="relative hidden md:block"
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
              >
                <button className="flex items-center gap-2 rounded-full p-1.5 transition hover:bg-neutral-100">
                  <img
                    src={session.user?.image || "/default-avatar.png"}
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#0055A4]/20"
                  />
                </button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-56 rounded-xl shadow-lg bg-white text-neutral-900 overflow-hidden z-50 border border-neutral-200"
                    >
                      <div className="px-4 py-3 border-b border-neutral-200">
                        <p className="text-sm font-bold">
                          {session.user?.name}
                        </p>
                        <p className="text-xs text-neutral-500 truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-3 hover:bg-neutral-100 text-sm font-medium"
                      >
                        SIGN OUT
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="hidden md:inline-flex px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition bg-[#0055A4] text-white hover:bg-[#004494] shadow-md"
              >
                SIGN IN
              </button>
            )}

            <div className="md:hidden ml-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Mobile Menu"
                className="p-2 rounded-lg hover:bg-neutral-100 transition"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
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
