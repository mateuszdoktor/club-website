import SolidNavbar from "@/components/Header/Navbar/SolidNavbar";

export default function ClubLayout({
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
