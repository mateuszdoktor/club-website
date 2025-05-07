import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const position = isLeft ? "left-2 sm:left-4" : "right-2 sm:right-4";
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute top-1/2 -translate-y-1/2 ${position} z-40`}
    >
      <div className="bg-white/90 hover:bg-white text-black w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
    </button>
  );
}
