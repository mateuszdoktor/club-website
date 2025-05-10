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
    <section className="relative bg-white px-6 py-20 space-y-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-black tracking-tight text-neutral-900 flex items-center gap-4">
              <CalendarDays className="w-10 h-10 text-neutral-900" />
              UPCOMING MATCHES
            </h2>
            <p className="text-neutral-500 mt-3 text-lg font-light">
              Real Madrid's upcoming fixtures
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <MatchesNav direction="left" onClick={() => scroll("left")} />
          <MatchesNav direction="right" onClick={() => scroll("right")} />

          <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
            <ul className="flex gap-8 snap-x snap-mandatory pb-8">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
