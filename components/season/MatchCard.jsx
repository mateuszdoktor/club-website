"use client";

import { format } from "date-fns";

export default function MatchCard({ match }) {
  const date = format(new Date(match.utcDate), "dd MMM yyyy, HH:mm");
  const { fullTime } = match.score ?? {};
  const { homeTeam, awayTeam } = match;

  const TeamBlock = ({ team }) => (
    <div className="flex items-center gap-3 w-1/3 min-w-0">
      <img
        src={team.crest}
        alt={team.name}
        className="w-7 h-7 object-contain"
      />
      <span className="truncate text-sm font-bold">
        {team.shortName || team.name}
      </span>
    </div>
  );

  return (
    <div className="rounded-xl p-6 bg-white shadow-md border border-neutral-200 hover:shadow-lg transition-all hover:border-[#0055A4]/30">
      <div className="flex justify-between items-center mb-4 text-xs text-neutral-500">
        <time>{date}</time>
        <span className="text-xs uppercase tracking-wider font-bold">
          {match.matchday ? `MD ${match.matchday}` : match.stage}
        </span>
      </div>
      <div className="flex items-center justify-between font-bold text-neutral-900 text-base">
        <TeamBlock team={homeTeam} />
        <div className="text-center w-1/3 text-lg font-black">
          {fullTime?.home ?? "-"} - {fullTime?.away ?? "-"}
        </div>
        <TeamBlock team={awayTeam} />
      </div>
    </div>
  );
}
