import { Newspaper } from "lucide-react";

export default function NewsHeading() {
  return (
    <div className="mb-8 bg-white z-10 py-4">
      <h2 className="text-[2.5rem] sm:text-[3rem] font-bold text-neutral-900 tracking-tight flex items-center gap-3">
        <Newspaper className="w-8 h-8 text-indigo-600" />
        Real Madrid News
      </h2>
    </div>
  );
}
