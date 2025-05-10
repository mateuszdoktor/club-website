export default function StandingsTable({ title, data }) {
  const isRealMadrid = (name = "") =>
    name.toLowerCase().includes("real madrid");

  return (
    <section className="mt-20 mb-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-black text-neutral-900 mb-8 tracking-tight">
        {title}
      </h2>

      <div className="overflow-hidden rounded-xl shadow-md border border-neutral-200 bg-white">
        <table className="min-w-full table-fixed text-sm text-neutral-800">
          <thead className="bg-neutral-100 text-xs uppercase tracking-wider border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 text-left w-10">#</th>
              <th className="px-6 py-4 text-left">TEAM</th>
              <th className="px-4 py-4 text-center w-12">PTS</th>
              <th className="px-4 py-4 text-center w-12">W</th>
              <th className="px-4 py-4 text-center w-12">D</th>
              <th className="px-4 py-4 text-center w-12">L</th>
              <th className="px-4 py-4 text-center w-12">GD</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {data.map((team) => {
              const teamData = team.team || team;
              const isReal = isRealMadrid(teamData.name);

              return (
                <tr
                  key={teamData.id}
                  className={`${
                    isReal
                      ? "bg-[#0055A4]/5 font-bold border-l-4 border-[#0055A4]"
                      : "hover:bg-neutral-50"
                  }`}
                >
                  <td className="px-6 py-4">{team.position}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={teamData.crest}
                      alt={teamData.name}
                      className="w-7 h-7 object-contain"
                    />
                    <span className={isReal ? "text-[#0055A4]" : ""}>
                      {teamData.name}
                    </span>
                  </td>
                  <td className="text-center font-bold">{team.points}</td>
                  <td className="text-center">{team.won}</td>
                  <td className="text-center">{team.draw}</td>
                  <td className="text-center">{team.lost}</td>
                  <td className="text-center font-mono">
                    {team.goalDifference >= 0 ? "+" : ""}
                    {team.goalDifference}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
