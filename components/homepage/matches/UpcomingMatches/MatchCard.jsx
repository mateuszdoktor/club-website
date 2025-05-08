import MatchTeamsRow from "./MatchTeamsRow";
import MatchDateInfo from "./MatchDateInfo";

export default function MatchCard({ match }) {
  return (
    <li className="flex-shrink-0 w-[380px] bg-gray-50 rounded-xl p-6 border shadow-md snap-center space-y-6">
      <div className="flex items-center justify-between gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img
            src={match.competition.emblem}
            alt={match.competition.name}
            className="h-7 w-7"
          />
          <span className="text-[0.95rem]">{match.competition.name}</span>
        </div>
        {match.matchday && (
          <span className="text-xs font-medium text-gray-400 ml-3">
            MD {match.matchday}
          </span>
        )}
      </div>

      <MatchTeamsRow home={match.homeTeam} away={match.awayTeam} />
      <MatchDateInfo date={match.utcDate} />
    </li>
  );
}
