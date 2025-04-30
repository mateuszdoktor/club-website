import SolidNavbar from "@/components/Header/Navbar/SolidNavbar";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SolidNavbar />
      {children}
    </div>
  );
}
