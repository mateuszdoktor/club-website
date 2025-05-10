import MatchDateInfo from "./MatchDateInfo";

export default function MatchCard({ match }) {
  return (
    <li className="flex-shrink-0 w-[420px] aspect-[4/5] bg-white rounded-xl p-8 snap-center flex flex-col justify-between border border-neutral-100 hover:border-[#0055A4]/20 transition-all shadow-sm hover:shadow-md">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img
            src={match.competition.emblem}
            alt={match.competition.name}
            className="h-8 w-8"
          />
          <span className="text-lg font-medium text-neutral-800 tracking-wide">
            {match.competition.name.toUpperCase()}
          </span>
        </div>
        {match.matchday && (
          <p className="text-sm text-neutral-500 font-mono">
            MATCHDAY {match.matchday}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8 my-8">
        <TeamItem team={match.homeTeam} align="center" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <span className="text-neutral-400 text-xs font-mono tracking-widest">
          VS
        </span>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <TeamItem team={match.awayTeam} align="center" />
      </div>

      <div className="mt-4">
        <MatchDateInfo date={match.utcDate} />
      </div>
    </li>
  );
}

function TeamItem({ team, align = "left" }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <img
        src={team.crest}
        alt={team.name}
        className="h-16 w-16 shrink-0 object-contain"
      />
      <span className="text-xl font-bold text-neutral-900 truncate flex-1 text-center">
        {team.shortName || team.name}
      </span>
    </div>
  );
}
