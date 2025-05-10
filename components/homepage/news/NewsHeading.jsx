import { Newspaper } from "lucide-react";

export default function NewsHeading() {
  return (
    <div className="mb-4">
      <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight flex items-center gap-4">
        <Newspaper className="w-10 h-10 text-neutral-900" />
        REAL MADRID NEWS
      </h2>
    </div>
  );
}
