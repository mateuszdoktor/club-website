import SolidNavbar from "@/components/layout/SolidNavbar";

export default function SeasonLayout({
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
