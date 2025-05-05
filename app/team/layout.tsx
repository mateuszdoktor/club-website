import SolidNavbar from "@/components/layout/SolidNavbar";

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
