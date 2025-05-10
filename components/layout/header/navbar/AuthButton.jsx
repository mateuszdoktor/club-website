"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AuthButton({ scrolled }) {
  const { data: session } = useSession();
  const [hover, setHover] = useState(false);

  if (!session) {
    return (
      <button
        onClick={() => signIn()}
        className={`hidden md:inline-flex px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition ${
          scrolled
            ? "bg-[#0055A4] text-white hover:bg-[#004494] shadow-md"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        SIGN IN
      </button>
    );
  }

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={`flex items-center gap-2 rounded-full p-1.5 transition ${
          scrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
        }`}
      >
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-[#0055A4]/20"
        />
      </motion.button>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-56 rounded-xl shadow-lg bg-white text-neutral-900 overflow-hidden z-50 border border-neutral-200"
          >
            <div className="px-4 py-3 border-b border-neutral-200">
              <p className="text-sm font-bold">{session.user?.name}</p>
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
  );
}
