import StandingsTable from "./StandingsTable";

const STANDINGS_TITLES = {
  PD: "LA LIGA STANDINGS",
  CL: "CHAMPIONS LEAGUE STANDINGS",
};

export default function Standings({ leagueCode, laliga, ucl }) {
  const standings =
    leagueCode === "PD" ? laliga : leagueCode === "CL" ? ucl : [];

  if (!standings?.length) return null;

  return (
    <StandingsTable
      title={STANDINGS_TITLES[leagueCode] || "STANDINGS"}
      data={standings}
    />
  );
}
