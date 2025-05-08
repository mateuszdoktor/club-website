import NextMatchHeader from "./NextMatchHeader";
import MatchTeams from "./MatchTeams";
import MatchDate from "./MatchDate";

export default function NextMatch({ match }) {
  const date = new Date(match.utcDate).toLocaleString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="w-full bg-[#0f172a] text-white px-6 md:px-10 py-14 space-y-12">
      <NextMatchHeader league={match.competition} matchday={match.matchday} />
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-wider uppercase">
        Next Match
      </h2>
      <MatchTeams home={match.homeTeam} away={match.awayTeam} />
      <MatchDate date={date} />
      <div className="text-center text-lg font-medium text-gray-300">
        {match.competition.currentSeason?.currentMatchday && (
          <span>
            Matchday: {match.competition.currentSeason.currentMatchday}
          </span>
        )}
      </div>
    </section>
  );
}
