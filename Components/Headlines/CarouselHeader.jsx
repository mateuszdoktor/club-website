import { Clock } from "lucide-react";

export default function CarouselHeader() {
  return (
    <div className="mb-10">
      <h2 className="text-[2.5rem] sm:text-[3rem] font-bold text-neutral-900 tracking-tight flex items-center gap-3">
        <Clock className="w-8 h-8 text-indigo-600" />
        Latest Headlines
      </h2>
    </div>
  );
}
