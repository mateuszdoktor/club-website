import SolidNavbar from "../../components/layout/SolidNavbar";

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
