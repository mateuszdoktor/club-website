"use client";

import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative text-white text-3xl font-bold transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}
