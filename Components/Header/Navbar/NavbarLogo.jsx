"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/logo-white-no-bg.png";
import logoNavy from "@/public/logo-navy-no-bg.png";

export default function NavbarLogo({ isSolid }) {
  return (
    <Link href="/" className="flex-shrink-0">
      <motion.div
        key={isSolid ? "navy" : "white"}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: isSolid ? 1.6 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={isSolid ? logoNavy : logoWhite}
          alt="Logo"
          width={50}
          height={50}
          className="object-contain transition-transform duration-300"
          priority
        />
      </motion.div>
    </Link>
  );
}
