// components/ScrollButton.js
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MatchesNav({ direction, onClick }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const positionClass = direction === "left" ? "left-2" : "right-2";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full ${positionClass}`}
      aria-label={`Scroll ${direction}`}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
}
