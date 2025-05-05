"use client";

import { format } from "date-fns";

export default function MatchCard({ match }) {
  const { teams, goals, fixture, league } = match;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-zinc-800 dark:to-zinc-900 p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border border-zinc-200 dark:border-zinc-700">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 text-xs text-gray-500 dark:text-gray-400">
        <time>{format(new Date(fixture.date), "dd MMM yyyy, HH:mm")}</time>
        <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
          {league.round}
        </span>
      </div>

      {/* Match info */}
      <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
        <div className="flex items-center gap-2 w-1/3 min-w-0">
          <div className="w-7 h-7 flex-shrink-0">
            <img
              src={teams.home.logo}
              alt={teams.home.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="truncate">{teams.home.name}</span>
        </div>

        <div className="text-2xl font-bold text-center w-1/3">
          {goals.home} : {goals.away}
        </div>

        <div className="flex items-center gap-2 justify-end w-1/3 min-w-0">
          <span className="truncate text-right">{teams.away.name}</span>
          <div className="w-7 h-7 flex-shrink-0">
            <img
              src={teams.away.logo}
              alt={teams.away.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
