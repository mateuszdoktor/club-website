"use client";

import { format } from "date-fns";

export default function MatchCard({ match }) {
  const date = format(new Date(match.utcDate), "dd MMM yyyy, HH:mm");
  const { fullTime } = match.score ?? {};
  const { homeTeam, awayTeam } = match;

  const TeamBlock = ({ team }) => (
    <div className="flex items-center gap-2 w-1/3 min-w-0">
      <img
        src={team.crest}
        alt={team.name}
        className="w-6 h-6 object-contain"
      />
      <span className="truncate text-sm font-medium">{team.name}</span>
    </div>
  );

  return (
    <div className="rounded-3xl p-6 bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all hover:scale-[1.015]">
      <div className="flex justify-between items-center mb-3 text-xs text-gray-500 dark:text-gray-400">
        <time>{date}</time>
        <span className="text-[10px] uppercase tracking-wide font-medium">
          {match.matchday ? `MD ${match.matchday}` : match.stage}
        </span>
      </div>
      <div className="flex items-center justify-between font-semibold text-gray-900 dark:text-white text-base">
        <TeamBlock team={homeTeam} />
        <div className="text-center w-1/3 text-lg font-bold">
          {fullTime?.home ?? "-"} - {fullTime?.away ?? "-"}
        </div>
        <TeamBlock team={awayTeam} />
      </div>
    </div>
  );
}
