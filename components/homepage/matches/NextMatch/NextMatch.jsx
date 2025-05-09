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
    <section className="w-full bg-black/90 px-4 sm:px-6 py-16 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0055A4]/10 via-black/90 to-[#FEBE10]/10 z-0" />
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5 z-0" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <img
              src={match.competition.emblem}
              alt={match.competition.name}
              className="h-10 sm:h-12 w-10 sm:w-12 object-contain filter brightness-0 invert"
            />
            <span className="text-white/80 text-sm sm:text-lg font-light tracking-wider">
              {match.competition.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/60 text-sm sm:text-lg font-mono">
            <CalendarDays className="h-3 sm:h-4 w-3 sm:w-4" />
            <span>{date}</span>
            {match.matchday && (
              <span className="ml-2 sm:ml-4">MD {match.matchday}</span>
            )}
          </div>
        </div>

        <h2 className="text-center text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">
          NEXT MATCH
        </h2>

        <MatchTeams home={match.homeTeam} away={match.awayTeam} />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
