import Link from "next/link";
import clsx from "clsx";

export default function NavLink({ href, children, solid = false }) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative text-lg font-bold tracking-wider transition-all duration-300",
        solid
          ? "text-neutral-900 hover:text-[#0055A4]"
          : "text-white hover:text-white/90"
      )}
    >
      <span className="uppercase">{children}</span>
      <span
        className={clsx(
          "absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
          solid ? "bg-[#0055A4]" : "bg-white"
        )}
      />
    </Link>
  );
}
