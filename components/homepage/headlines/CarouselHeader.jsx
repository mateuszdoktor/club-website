import { Clock } from "lucide-react";

export default function CarouselHeader() {
  return (
    <div className="mb-8">
      <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight flex items-center gap-4">
        <Clock className="w-10 h-10 text-neutral-900" />
        LATEST HEADLINES
      </h2>
    </div>
  );
}
