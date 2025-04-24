import NavLink from "./NavLink";

export default function NavbarLinks({
  links,
  solid,
}) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink key={link.label} href={link.href} solid={solid}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
