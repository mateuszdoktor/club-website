import MatchDateInfo from "./MatchDateInfo";

export default function MatchCard({ match }) {
  return (
    <li className="flex-shrink-0 w-[420px] aspect-[4/5] bg-white rounded-2xl p-6 shadow-md border border-neutral-200 snap-center flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <img
            src={match.competition.emblem}
            alt={match.competition.name}
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-neutral-800">
            {match.competition.name}
          </span>
        </div>
        {match.matchday && (
          <p className="text-md text-neutral-500 font-medium">
            Matchday {match.matchday}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-6 mt-6">
        <TeamItem team={match.homeTeam} align="center" />
        <span className="text-neutral-400 text-lg font-bold">vs</span>
        <TeamItem team={match.awayTeam} align="center" />
      </div>

      <div className="mt-8">
        <MatchDateInfo date={match.utcDate} />
      </div>
    </li>
  );
}

function TeamItem({ team, align = "left" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={team.crest}
        alt={team.name}
        className="h-14 w-14 shrink-0 rounded"
      />
      <span
        className={`text-lg font-semibold text-neutral-900 text-${align} truncate max-w-[250px]`}
      >
        {team.name}
      </span>
    </div>
  );
}
