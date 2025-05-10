import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MatchesNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  const position = isLeft ? "left-0" : "right-0";

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 backdrop-blur-sm border border-neutral-200 hover:border-[#0055A4] transition rounded-full ${position} shadow-lg`}
    >
      <Icon className="w-6 h-6 text-neutral-700 hover:text-[#0055A4]" />
    </button>
  );
}
