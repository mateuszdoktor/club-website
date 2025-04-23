import TeamDisplay from "./TeamDisplay";

export default function MatchTeams({ home, away }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
      <TeamDisplay team={home} align="right" />
      <div className="text-3xl md:text-4xl text-white/60 font-bold">vs</div>
      <TeamDisplay team={away} align="left" />
    </div>
  );
}
