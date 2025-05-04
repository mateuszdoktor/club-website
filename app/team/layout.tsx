import SolidNavbar from "@/components/Header/Navbar/SolidNavbar";

export default function TeamLayout({
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
