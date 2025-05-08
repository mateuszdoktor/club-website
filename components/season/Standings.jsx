import StandingsTable from "./StandingsTable";

const STANDINGS_TITLES = {
  PD: "La Liga Standings",
  CL: "Champions League Standings",
};

export default function Standings({ leagueCode, laliga, ucl }) {
  const standings =
    leagueCode === "PD" ? laliga : leagueCode === "CL" ? ucl : [];

  if (!standings?.length) return null;

  return (
    <StandingsTable
      title={STANDINGS_TITLES[leagueCode] || "Standings"}
      data={standings}
    />
  );
}
