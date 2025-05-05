"use client";

import { useRef } from "react";
import { CalendarDays } from "lucide-react";
import MatchCard from "./MatchCard";
import MatchesNav from "./MatchesNav";

export default function UpcomingMatches({ matches }) {
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const offset = 380 * (dir === "left" ? -1 : 1);
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white p-8 space-y-6 w-full overflow-hidden">
      <div className="mb-10">
        <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold text-neutral-900 tracking-tight flex items-center gap-3">
          <CalendarDays className="w-8 h-8 text-indigo-600" />
          Upcoming Matches
        </h2>
        <p className="text-neutral-500 mt-2">See what’s coming up next</p>
      </div>

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
