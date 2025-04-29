"use client";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function MobileMenu({ links, onClose}) {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[999] flex flex-col md:hidden bg-white text-gray-900"
    >
      {/* Close Icon */}
      <div className="flex justify-end px-4 py-4 border-b border-gray-200">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-4 text-center">
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} solid={true}>
            <span
              onClick={onClose}
              className="text-2xl font-semibold tracking-tight hover:opacity-80 transition"
            >
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Auth Section */}
      <div className="border-t border-gray-200 px-6 py-6 text-center">
        {session ? (
          <>
            <div className="flex flex-col items-center gap-2 mb-4">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="User avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-sm font-medium">{session.user?.name}</p>
              <p className="text-xs text-gray-500">{session.user?.email}</p>
            </div>
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="w-full py-2 px-4 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              signIn();
              onClose();
            }}
            className="w-full py-2 px-4 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
          >
            Sign In
          </button>
        )}
      </div>
    </motion.div>
  );
}
