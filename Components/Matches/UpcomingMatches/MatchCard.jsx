import MatchTeamsRow from "./MatchTeamsRow";
import MatchDateInfo from "./MatchDateInfo";

export default function MatchCard({ match }) {
  return (
    <li className="flex-shrink-0 w-[360px] bg-gray-50 rounded-xl p-6 border shadow-md snap-center space-y-5">
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <img
          src={match.league.logo}
          alt={match.league.name}
          className="h-6 w-6"
        />
        <span>
          {match.league.name} – {match.league.round}
        </span>
      </div>

      <MatchTeamsRow home={match.teams.home} away={match.teams.away} />

      <MatchDateInfo date={match.fixture.date} />
    </li>
  );
}
