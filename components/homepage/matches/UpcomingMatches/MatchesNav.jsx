import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MatchesNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  const position = isLeft ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-md hover:shadow-lg transition rounded-full ${position}`}
    >
      <Icon className="w-6 h-6 text-neutral-700" />
    </button>
  );
}
