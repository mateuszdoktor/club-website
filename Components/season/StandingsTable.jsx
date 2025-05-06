export default function StandingsTable({ title, data }) {
  return (
    <section className="mt-16 mb-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
        {title}
      </h2>

      <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-neutral-200 dark:ring-neutral-800 backdrop-blur-md bg-white/70 dark:bg-neutral-900/60">
        <table className="min-w-full table-fixed text-sm sm:text-base text-neutral-800 dark:text-neutral-100">
          <thead className="bg-neutral-100 dark:bg-neutral-800 text-xs sm:text-sm uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-700">
            <tr>
              <th className="px-4 py-4 text-left w-10">#</th>
              <th className="px-4 py-4 text-left">Team</th>
              <th className="px-2 py-4 text-center w-12">Pts</th>
              <th className="px-2 py-4 text-center w-12">W</th>
              <th className="px-2 py-4 text-center w-12">D</th>
              <th className="px-2 py-4 text-center w-12">L</th>
              <th className="px-2 py-4 text-center w-12">GD</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {data.map((team) => {
              const isReal = team.team.name === "Real Madrid";
              return (
                <tr
                  key={team.team.id}
                  className={`transition-all duration-200 ${
                    isReal
                      ? "bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/40 text-indigo-900 dark:text-indigo-200 font-semibold backdrop-blur-sm"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  <td className="px-4 py-4 text-left">{team.rank}</td>
                  <td className="px-4 py-4 flex items-center gap-2">
                    <img
                      src={team.team.logo}
                      alt={team.team.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                    {team.team.name}
                  </td>
                  <td className="text-center">{team.points}</td>
                  <td className="text-center">{team.all.win}</td>
                  <td className="text-center">{team.all.draw}</td>
                  <td className="text-center">{team.all.lose}</td>
                  <td className="text-center">
                    {team.goalsDiff >= 0 ? "+" : ""}
                    {team.goalsDiff}
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
