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
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-32">
      <h1 className="text-4xl font-black tracking-tight text-neutral-900 mb-12">
        2024/25 SEASON MATCHES
      </h1>

      <div className="flex items-center gap-3 flex-wrap mb-12">
        {competitions.map((c, i) => (
          <button
            key={c.code}
            onClick={() => {
              setSelectedIndex(i);
              const stages = extractStagesForCompetition(matches, c.code);
              setSelectedStage(stages.length > 0 ? stages[0] : null);
              setCurrentGroupIndex(0);
            }}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
              selectedIndex === i
                ? "bg-[#0055A4] text-white border-[#0055A4] shadow-md"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200"
            }`}
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-5 h-5 bg-neutral-300 rounded-full" />
            )}
            {c.name.toUpperCase()}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b pb-2">
        {selected?.name.toUpperCase()}
      </h2>

      {selected?.code === "CL" && stages?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => {
                setSelectedStage(stage);
                setCurrentGroupIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold border ${
                selectedStage === stage
                  ? "bg-[#0055A4] text-white border-[#0055A4]"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200"
              }`}
            >
              {normalizeStageName(stage).toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {groupedMatches.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {groupedMatches.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setCurrentGroupIndex(i)}
              className={`px-4 py-2 rounded-full text-xs font-bold border ${
                currentGroupIndex === i
                  ? "bg-[#0055A4] text-white border-[#0055A4]"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200"
              }`}
            >
              {group.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
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
