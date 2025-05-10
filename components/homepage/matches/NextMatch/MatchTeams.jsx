import TeamDisplay from "./TeamDisplay";

export default function MatchTeams({ home, away }) {
  return (
    <div className="flex justify-center items-center gap-20 md:gap-40 px-4">
      <TeamDisplay team={home} align="right" />
      <div className="text-5xl md:text-7xl font-bold text-white/10">vs</div>
      <TeamDisplay team={away} align="left" />
    </div>
  );
}
