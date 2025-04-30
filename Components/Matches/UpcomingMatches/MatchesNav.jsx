"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MatchesNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  const position = isLeft ? "left-2" : "right-2";

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full ${position}`}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
}
