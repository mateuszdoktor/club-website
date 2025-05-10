import NavLink from "./NavLink";

export default function NavbarLinks({ links, solid = false }) {
  return (
    <div className="flex items-center gap-8">
      {links.map(({ href, label }) => (
        <NavLink key={label} href={href} solid={solid}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}
