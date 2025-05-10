"use client";

import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { X } from "lucide-react";
import NavLink from "./NavLink";

export default function MobileMenu({ links, onClose }) {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[999] flex flex-col md:hidden bg-white text-neutral-900"
    >
      <div className="flex justify-end px-6 py-5 border-b border-neutral-200">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-neutral-100 transition"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-4 text-center">
        {links.map(({ label, href }) => (
          <NavLink key={label} href={href} solid>
            <span
              onClick={onClose}
              className="text-2xl font-bold tracking-tight hover:text-[#0055A4] transition"
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-neutral-200 px-6 py-8 text-center">
        {session ? (
          <>
            <div className="flex flex-col items-center gap-3 mb-6">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="User avatar"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0055A4]/20"
              />
              <p className="text-sm font-bold">{session.user?.name}</p>
              <p className="text-xs text-neutral-500">{session.user?.email}</p>
            </div>
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="w-full py-3 px-6 text-sm font-bold bg-[#0055A4] text-white rounded-xl hover:bg-[#004494] transition shadow-md"
            >
              SIGN OUT
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              signIn();
              onClose();
            }}
            className="w-full py-3 px-6 text-sm font-bold bg-[#0055A4] text-white rounded-xl hover:bg-[#004494] transition shadow-md"
          >
            SIGN IN
          </button>
        )}
      </div>
    </motion.div>
  );
}
