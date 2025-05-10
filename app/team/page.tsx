import { getPlayers } from "@/lib/services/playersService";
import PlayerCard from "@/components/team/PlayerCard";
import {
  groupPlayersByPosition,
  orderedPositions,
  normalizePlayerPositions,
} from "@/lib/utils/playerUtils";

export default async function TeamPage() {
  const rawPlayers = await getPlayers();
  const players = normalizePlayerPositions(rawPlayers);
  const grouped = groupPlayersByPosition(players);

  return (
    <div className="max-w-7xl mx-auto px-6 py-28">
      <h1 className="text-5xl font-black text-center mb-20 text-neutral-900 tracking-tight uppercase">
        REAL MADRID SQUAD
      </h1>

      {orderedPositions.map((pos) => {
        const playersInPos = grouped[pos];
        if (!playersInPos?.length) return null;

        const sortedPlayers = [...playersInPos].sort(
          (a, b) => (a.shirtNumber ?? Infinity) - (b.shirtNumber ?? Infinity)
        );

        return (
          <section key={pos} className="mb-24">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 border-b pb-2">
              {pos.toUpperCase()}
            </h2>

            <div className="relative overflow-visible">
              <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll px-1 scroll-smooth hide-scrollbar pb-6">
                {sortedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="snap-start shrink-0 group transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <PlayerCard player={player} />
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
