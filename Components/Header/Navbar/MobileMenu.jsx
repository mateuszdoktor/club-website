"use client";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import clsx from "clsx";

export default function MobileMenu({ links, isSolid }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={clsx(
        "fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 px-6 py-12 md:hidden transition-colors duration-300",
        isSolid ? "bg-white text-gray-900" : "bg-black text-white"
      )}
    >
      {links.map((link) => (
        <NavLink key={link.label} href={link.href} solid={true}>
          <span className="text-2xl font-semibold tracking-tight">
            {link.label}
          </span>
        </NavLink>
      ))}
    </motion.div>
  );
}
