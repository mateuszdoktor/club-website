import StandingsTable from "./StandingsTable";

export default function Standings({ leagueName, laliga, ucl }) {
  if (leagueName === "La Liga") {
    return <StandingsTable title="La Liga Standings" data={laliga[0]} />;
  }

  if (leagueName === "UEFA Champions League") {
    return (
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
          Champions League Standings
        </h2>
        {ucl.map((group) => (
          <StandingsTable
            key={group[0].group}
            title={group[0].group}
            data={group}
          />
        ))}
      </div>
    );
  }

  return null;
}
