import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative text-white text-2xl font-medium transition-all duration-300 hover:text-white/90"
    >
      <span>{children}</span>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
