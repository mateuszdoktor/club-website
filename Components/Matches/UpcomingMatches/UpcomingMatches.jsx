"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import MatchCard from "./MatchCard";

export default function UpcomingMatches({ matches }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white p-8 space-y-6 w-full relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        UPCOMING MATCHES
      </h2>

      {/* Strzałki */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      {/* Karuzela */}
      <div
        className="overflow-hidden hover:overflow-x-auto transition-all duration-300"
        ref={scrollRef}
      >
        <ul className="flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-4">
          {matches.map((match) => (
            <MatchCard key={match.fixture.id} match={match} />
          ))}
        </ul>
      </div>
    </div>
  );
}
