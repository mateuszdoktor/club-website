"use client";

import { useMemo, useState } from "react";
import MatchCard from "@/components/season/MatchCard";
import Standings from "@/components/season/Standings";
import {
  extractCompetitions,
  filterMatchesByCompetition,
  groupMatchesByMatchday,
  normalizeStageName,
  extractStagesForCompetition,
  filterMatchesByStage,
} from "@/lib/utils/matchesUtils";

const GROUP_SIZE = 6;

export default function ClientMatchList({
  matches,
  laligaStandings,
  uclStandings,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedStage, setSelectedStage] = useState(null);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const competitions = useMemo(() => extractCompetitions(matches), [matches]);
  const selected = competitions[selectedIndex];

  const filtered = useMemo(() => {
    const byCompetition = filterMatchesByCompetition(matches, selected?.code);
    return selectedStage
      ? filterMatchesByStage(byCompetition, selectedStage)
      : byCompetition;
  }, [matches, selected, selectedStage]);

  const groupedMatches = useMemo(() => {
    if (selected?.code === "CL") {
      return [
        {
          label: "All Matches",
          matches: filtered.sort(
            (a, b) => new Date(b.utcDate) - new Date(a.utcDate)
          ),
        },
      ];
    }
    return groupMatchesByMatchday(filtered, GROUP_SIZE);
  }, [filtered, selected]);

  const stages = useMemo(() => {
    return selected?.code === "CL"
      ? extractStagesForCompetition(matches, selected.code)
      : null;
  }, [matches, selected]);

  const visibleMatches = groupedMatches[currentGroupIndex]?.matches ?? [];

  return (
    <main className="max-w-7xl mx-auto px-6 pt-36 pb-36 py-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
        2024/25 Season – Match Results
      </h1>

      <div className="flex items-center gap-3 flex-wrap mb-10">
        {competitions.map((c, i) => (
          <button
            key={c.code}
            onClick={() => {
              setSelectedIndex(i);
              const stages = extractStagesForCompetition(matches, c.code);
              setSelectedStage(stages.length > 0 ? stages[0] : null);
              setCurrentGroupIndex(0);
            }}
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

      {selected?.code === "CL" && stages?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => {
                setSelectedStage(stage);
                setCurrentGroupIndex(0);
              }}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                selectedStage === stage
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200"
              }`}
            >
              {normalizeStageName(stage)}
            </button>
          ))}
        </div>
      )}

      {groupedMatches.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {groupedMatches.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setCurrentGroupIndex(i)}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                currentGroupIndex === i
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {visibleMatches.map((m) => (
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
