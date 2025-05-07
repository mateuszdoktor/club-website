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
        className={`hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium transition ${
          scrolled
            ? "bg-gray-900 text-white hover:bg-gray-700"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        Sign In
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
        className="flex items-center gap-2 rounded-full p-1.5 transition hover:bg-white/10"
      >
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt="avatar"
          className="w-11 h-11 rounded-full object-cover"
        />
      </motion.button>
      <AnimatePresence>
        {hover && (
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
}
