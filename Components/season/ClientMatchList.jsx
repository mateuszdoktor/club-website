"use client";

import { useMemo, useState } from "react";
import MatchCard from "@/components/season/MatchCard.jsx";

export default function ClientMatchList({ matches }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const competitions = useMemo(() => {
    const seen = new Set();
    const ordered = [
      "La Liga",
      "UEFA Champions League",
      "Copa del Rey",
      "Super Cup",
      "Friendlies",
    ];

    return matches
      .filter(({ league }) => {
        if (seen.has(league.name)) return false;
        seen.add(league.name);
        return true;
      })
      .map(({ league }) => ({ name: league.name, logo: league.logo }))
      .sort((a, b) => {
        const ai = ordered.indexOf(a.name);
        const bi = ordered.indexOf(b.name);
        if (ai !== -1 || bi !== -1)
          return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        return a.name.localeCompare(b.name);
      });
  }, [matches]);

  const selected = competitions[selectedIndex];
  const filtered = useMemo(
    () => matches.filter((m) => m.league.name === selected?.name),
    [matches, selected]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-36 py-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
        2023/24 Season – Match Results
      </h1>

      <div className="flex items-center gap-3 flex-wrap mb-10">
        {competitions.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSelectedIndex(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm ${
              selectedIndex === i
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200"
            }`}
          >
            {c.logo && (
              <img
                src={c.logo}
                alt={c.name}
                className="w-5 h-5 object-contain"
              />
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
          <MatchCard key={m.fixture.id} match={m} />
        ))}
      </div>
    </main>
  );
}
