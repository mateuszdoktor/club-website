import { getPlayers } from "@/lib/services/playersService";
import PlayerCard from "@/components/PlayerCard";
import { playerAssets } from "@/lib/data/teamData";

const orderedPositions = [
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Attacker",
  "Unknown",
];

function groupPlayersByPosition(players) {
  return players.reduce((acc, { player, statistics }) => {
    const position = statistics?.[0]?.games?.position || "Unknown";
    if (!acc[position]) acc[position] = [];
    acc[position].push({ player, statistics });
    return acc;
  }, {});
}

export default async function TeamPage() {
  const players = await getPlayers();
  const grouped = groupPlayersByPosition(players);

  return (
    <div className="max-w-[90rem] mx-auto px-6 py-24 pt-36">
      <h1 className="text-6xl font-extrabold text-center mb-24 text-neutral-900 tracking-tight">
        Real Madrid Squad
      </h1>

      {orderedPositions.map((pos) => {
        const playersInPos = grouped[pos];
        if (!playersInPos?.length) return null;

        const sortedPlayers = [...playersInPos].sort(
          (a, b) =>
            (playerAssets[a.player.id]?.number ?? Infinity) -
            (playerAssets[b.player.id]?.number ?? Infinity)
        );

        return (
          <section key={pos} className="mb-32">
            <h2 className="text-4xl font-semibold text-neutral-800 mb-10 px-2">
              {pos}s
            </h2>

            <div className="relative overflow-visible">
              <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll px-1 scroll-smooth hide-scrollbar pb-4">
                {sortedPlayers.map(({ player, statistics }) => (
                  <div
                    key={player.id}
                    className="snap-start shrink-0 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <PlayerCard player={player} statistics={statistics} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
