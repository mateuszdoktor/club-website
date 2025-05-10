import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const position = isLeft ? "left-0" : "right-0";
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute top-1/2 -translate-y-1/2 ${position} z-40`}
    >
      <div className="bg-white/90 hover:bg-white text-neutral-700 w-12 h-12 flex items-center justify-center rounded-full shadow-lg border border-neutral-200 hover:border-[#0055A4] hover:text-[#0055A4] transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
    </button>
  );
}
