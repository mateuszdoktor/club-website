import TeamDisplay from "./TeamDisplay";

export default function MatchTeams({ home, away }) {
  return (
    <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 px-4 sm:px-10">
      <TeamDisplay team={home} align="right" />

      <div className="flex flex-col items-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent my-2 sm:my-4" />
        <span className="text-[10px] sm:text-xs font-mono text-white/30 tracking-widest">
          VS
        </span>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent my-2 sm:my-4" />
      </div>

      <TeamDisplay team={away} align="left" />
    </div>
  );
}
