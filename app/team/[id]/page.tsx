import { getPlayer } from "@/lib/services/playersService";
import { playerAssets, countryCodeMap } from "@/lib/data/teamData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PlayerProfileClient from "./PlayerProfileClient";

export default async function PlayerPage({ params }) {
  const { id } = await params;
  
  const playerData = await getPlayer({ id: Number(id) });

  if (!playerData) {
    return <p className="text-center text-red-500 mt-10">Player not found.</p>;
  }

  const { player, statistics } = playerData;
  const asset = playerAssets[player.id];
  const flagCode =
    countryCodeMap[player.nationality as keyof typeof countryCodeMap] ?? "us";

  return (
    <div className="max-w-[100rem] mx-auto px-6 py-20 pt-36">
      <Link
        href="/team"
        className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold flex items-center gap-2 mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Team
      </Link>

      <PlayerProfileClient
        statistics={statistics}
        player={player}
        asset={asset}
        flagCode={flagCode}
      />
    </div>
  );
}
