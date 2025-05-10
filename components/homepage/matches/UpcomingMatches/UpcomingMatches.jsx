"use client";

import { useRef } from "react";
import { CalendarDays } from "lucide-react";
import MatchCard from "./MatchCard";
import MatchesNav from "./MatchesNav";

export default function UpcomingMatches({ matches }) {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const cardWidth = 420;

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container || isScrolling.current) return;

    const offset = cardWidth * (dir === "left" ? -1 : 1);
    isScrolling.current = true;
    container.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(() => (isScrolling.current = false), 350);
  };

  return (
    <section className="relative bg-white px-6 py-12 space-y-10 w-full overflow-hidden">
      <div>
        <h2 className="text-[2.25rem] sm:text-[2.75rem] font-bold tracking-tight flex items-center gap-3 text-neutral-900">
          <CalendarDays className="w-8 h-8 text-neutral-800" />
          Upcoming Matches
        </h2>
        <p className="text-neutral-500 mt-2 text-lg">
          See what’s coming up next
        </p>
      </div>

      <div className="relative">
        <MatchesNav direction="left" onClick={() => scroll("left")} />
        <MatchesNav direction="right" onClick={() => scroll("right")} />

        <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
          <ul className="flex gap-6 snap-x snap-mandatory pb-4">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
