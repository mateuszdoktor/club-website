"use client";

import { useMemo, useState } from "react";
import MatchCard from "@/components/season/MatchCard";
import Standings from "@/components/season/Standings";

export default function ClientMatchList({
  matches,
  laligaStandings,
  uclStandings,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const competitions = useMemo(() => {
    const seen = new Set();

    return matches
      .filter(({ competition }) => {
        if (seen.has(competition.code)) return false;
        seen.add(competition.code);
        return true;
      })
      .map(({ competition }) => ({
        name: competition.name,
        code: competition.code,
        logo: competition.emblem,
      }));
  }, [matches]);

  const selected = competitions[selectedIndex];
  const filtered = useMemo(
    () => matches.filter((m) => m.competition.code === selected?.code),
    [matches, selected]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-36 py-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
        2024/25 Season – Match Results
      </h1>

      <div className="flex items-center gap-3 flex-wrap mb-10">
        {competitions.map((c, i) => (
          <button
            key={c.code}
            onClick={() => setSelectedIndex(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm ${
              selectedIndex === i
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200"
            }`}
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                className="w-5 h-5 object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/default-league-logo.svg";
                }}
              />
            ) : (
              <div className="w-5 h-5 bg-neutral-300 rounded-full" />
            )}
            {c.name}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-4 border-b pb-2">
        {selected?.name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>

      <Standings
        leagueCode={selected?.code}
        laliga={laligaStandings}
        ucl={uclStandings}
      />
    </main>
  );
}
