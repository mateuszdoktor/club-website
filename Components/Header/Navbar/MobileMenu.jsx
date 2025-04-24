"use client";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import clsx from "clsx";

export default function MobileMenu({
  links,
  isSolid,
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "md:hidden flex flex-col items-center gap-4 overflow-hidden py-4",
        isSolid ? "bg-white text-gray-900" : "bg-black text-white"
      )}
    >
      {links.map((link) => (
        <NavLink key={link.label} href={link.href} solid={isSolid}>
          {link.label}
        </NavLink>
      ))}
    </motion.div>
  );
}
