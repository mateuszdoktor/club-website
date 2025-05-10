import { Clock } from "lucide-react";

export default function CarouselHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight flex items-center gap-3">
        <Clock className="w-8 h-8 text-indigo-600" />
        Latest Headlines
      </h2>
    </div>
  );
}
