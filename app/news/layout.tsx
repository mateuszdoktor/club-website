import SolidNavbar from "@/components/layout/SolidNavbar";

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
