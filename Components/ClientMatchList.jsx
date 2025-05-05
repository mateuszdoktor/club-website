"use client";

import { useMemo, useState } from "react";
import MatchCard from "@/components/MatchCard";

export default function ClientMatchList({ matches }) {
const competitions = useMemo(() => {
  const seen = new Set();
  const filtered = matches
    .filter((match) => {
      const key = match.league.name;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((match) => ({
      name: match.league.name,
      logo: match.league.logo,
    }));

  const customOrder = [
    "La Liga",
    "UEFA Champions League",
    "Copa del Rey",
    "Super Cup",
    "Friendlies",
  ];

  return filtered.sort((a, b) => {
    const aIndex = customOrder.indexOf(a.name);
    const bIndex = customOrder.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    return a.name.localeCompare(b.name);
  });
}, [matches]);



  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCompetition = competitions[selectedIndex];

  const filteredMatches = useMemo(() => {
    if (!selectedCompetition) return [];
    return matches.filter(
      (match) => match.league.name === selectedCompetition.name
    );
  }, [matches, selectedCompetition]);

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-36 py-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
        2023/24 Season – Match Results
      </h1>

      <div className="flex items-center gap-3 flex-wrap mb-10">
        {competitions.map((comp, index) => (
          <button
            key={comp.name}
            onClick={() => setSelectedIndex(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm ${
              selectedIndex === index
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200"
            }`}
          >
            {comp.logo && (
              <img
                src={comp.logo}
                alt={comp.name}
                className="w-5 h-5 object-contain"
              />
            )}
            {comp.name}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-4 border-b pb-2">
        {selectedCompetition?.name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMatches.map((match) => (
          <MatchCard key={match.fixture.id} match={match} />
        ))}
      </div>
    </main>
  );
}
