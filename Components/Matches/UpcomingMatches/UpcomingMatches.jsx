"use client";

import { useRef } from "react";
import MatchCard from "./MatchCard";
import MatchesNav from "./MatchesNav";

export default function UpcomingMatches({ matches }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 380 * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white p-8 space-y-6 w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
        Upcoming Matches
      </h2>

      <div className="relative">
        <MatchesNav direction="left" onClick={() => handleScroll("left")} />
        <MatchesNav direction="right" onClick={() => handleScroll("right")} />

        <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
          <ul className="flex gap-6 snap-x snap-mandatory pb-4">
            {matches.map((match) => (
              <MatchCard key={match.fixture.id} match={match} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
