"use client";

import { format } from "date-fns";

export default function MatchCard({ match }) {
  const date = format(new Date(match.utcDate), "dd MMM yyyy, HH:mm");

  const TeamBlock = ({ team }) => (
    <div className="flex items-center gap-2 w-1/3 min-w-0">
      <div className="w-7 h-7 flex-shrink-0">
        <img
          src={team.crest}
          alt={team.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="truncate">{team.name}</span>
    </div>
  );

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-zinc-800 dark:to-zinc-900 p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border border-zinc-200 dark:border-zinc-700">
      <div className="flex justify-between items-center mb-4 text-xs text-gray-500 dark:text-gray-400">
        <time>{date}</time>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
          {match.matchday ? `MD ${match.matchday}` : match.stage}
        </span>
      </div>

      <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
        <TeamBlock team={match.homeTeam} />
        <span className="text-center w-1/3">
          {match.score.fullTime.home ?? 0} - {match.score.fullTime.away ?? 0}
        </span>
        <TeamBlock team={match.awayTeam} />
      </div>
    </div>
  );
}
