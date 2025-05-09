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
    <div className="max-w-[90rem] mx-auto px-6 py-24 pt-36">
      <h1 className="text-6xl font-extrabold text-center mb-24 text-neutral-900 tracking-tight">
        Real Madrid Squad
      </h1>

      {orderedPositions.map((pos) => {
        const playersInPos = grouped[pos];
        if (!playersInPos?.length) return null;

        const sortedPlayers = [...playersInPos].sort(
          (a, b) => (a.shirtNumber ?? Infinity) - (b.shirtNumber ?? Infinity)
        );

        return (
          <section key={pos} className="mb-32">
            <h2 className="text-4xl font-semibold text-neutral-800 mb-10 px-2">
              {pos}s
            </h2>

            <div className="relative overflow-visible">
              <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll px-1 scroll-smooth hide-scrollbar pb-4">
                {sortedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="snap-start shrink-0 group transition-transform duration-300 hover:scale-[1.03]"
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
