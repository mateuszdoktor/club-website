import Link from "next/link";
import clsx from "clsx";

export default function NavLink({
  href,
  children,
  solid = false,
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative text-2xl font-medium transition-all duration-300",
        solid
          ? "text-gray-900 hover:text-gray-700"
          : "text-white hover:text-white/90"
      )}
    >
      <span>{children}</span>
      <span
        className={clsx(
          "absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
          solid ? "bg-gray-900" : "bg-white"
        )}
      ></span>
    </Link>
  );
}
