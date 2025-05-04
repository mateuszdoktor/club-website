"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { playerAssets, countryCodeMap } from "@/lib/data/teamData";

const TEAM_ID = 541;
const SEASON = 2023;

export default function PlayerPage() {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(
          `/api/player?id=${id}&team=${TEAM_ID}&season=${SEASON}`
        );
        const data = await res.json();
        setPlayerData(data.response[0]);
      } catch (err) {
        console.error("Failed to load player", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-400">
        Loading player...
      </div>
    );
  if (!playerData)
    return <p className="text-center text-red-500 mt-10">Player not found.</p>;

  const { player, statistics } = playerData;
  const stats = statistics[0];
  const asset = playerAssets[player.id];
  const flagCode = countryCodeMap[player.nationality];

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 pt-36">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-12 items-center md:items-start p-8">
        <div className="w-full md:w-[300px] aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
          <img
            src={asset?.image || player.photo}
            alt={player.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-neutral-900 flex items-center gap-4">
              {player.name}
              {flagCode && (
                <img
                  src={`https://flagcdn.com/w40/${flagCode}.png`}
                  alt={player.nationality}
                  className="w-6 h-4 rounded-sm border border-neutral-300 shadow"
                  loading="lazy"
                />
              )}
            </h1>
            <p className="text-neutral-600 text-lg mt-2">
              {player.age} y/o · {player.nationality} ·{" "}
              {stats.games.position || "Unknown Position"}
            </p>
          </div>

          {/* Statystyki */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">
              Season Stats
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Stat label="Appearances" value={stats.games.appearences} />
              <Stat label="Goals" value={stats.goals.total} />
              <Stat label="Assists" value={stats.goals.assists ?? "–"} />
              <Stat label="Yellow Cards" value={stats.cards.yellow} />
              <Stat label="Red Cards" value={stats.cards.red} />
              <Stat label="Minutes Played" value={stats.games.minutes ?? "–"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm px-4 py-5 flex flex-col items-center justify-center">
      <span className="text-sm text-neutral-500">{label}</span>
      <span className="text-2xl font-semibold text-neutral-900 mt-1">
        {value}
      </span>
    </div>
  );
}
