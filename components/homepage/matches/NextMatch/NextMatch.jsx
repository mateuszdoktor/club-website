import MatchTeams from "./MatchTeams";
import { CalendarDays } from "lucide-react";

export default function NextMatch({ match }) {
  const date = new Date(match.utcDate).toLocaleString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="relative w-full bg-gray-900 px-6 md:px-20 py-28 pb-38 overflow-hidden isolate">
      <div className="absolute inset-0  rounded-xl blur-3xl opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={match.competition.emblem}
              alt={match.competition.name}
              className="h-14 w-14 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
            />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-semibold tracking-tight">
                {match.competition.name}
              </span>
              {match.matchday && (
                <span className="text-white/50 text-sm font-medium tracking-wide">
                  Matchday {match.matchday}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-white text-base md:text-lg font-medium px-4 py-2 rounded-full backdrop-blur bg-white/5 border border-white/10">
            <CalendarDays className="h-5 w-5 text-white/70" />
            <span className="text-white/80">{date}</span>
          </div>
        </div>

        <h2 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-300 to-white text-transparent bg-clip-text uppercase">
          Next Match
        </h2>

        <MatchTeams home={match.homeTeam} away={match.awayTeam} />

        {match.competition.currentSeason?.currentMatchday && (
          <p className="text-center text-white/30 text-sm mt-6 tracking-wide">
            Matchday {match.competition.currentSeason.currentMatchday}
          </p>
        )}
      </div>
    </section>
  );
}
