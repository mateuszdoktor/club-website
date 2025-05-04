"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { playerAssets, countryCodeMap } from "@/lib/data/teamData";

const TEAM_ID = 541;
const SEASON = 2023;

export default function TeamPage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(
          `/api/players?team=${TEAM_ID}&season=${SEASON}`
        );
        const data = await res.json();
        setPlayers(data.response);
      } catch (err) {
        console.error("Failed to load players", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const grouped = players.reduce((acc, { player, statistics }) => {
    const pos = statistics?.[0]?.games?.position || "Unknown";
    if (!acc[pos]) acc[pos] = [];
    acc[pos].push({ player, statistics });
    return acc;
  }, {});

  const orderedPositions = [
    "Goalkeeper",
    "Defender",
    "Midfielder",
    "Attacker",
    "Unknown",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-400">
        Loading squad...
      </div>
    );
  }

  return (
    <div className="max-w-[90rem] mx-auto px-8 py-24 pt-[96px]">
      <h1 className="text-5xl font-extrabold text-center mb-20 text-neutral-900">
        Real Madrid Squad
      </h1>

      {orderedPositions.map((pos) =>
        grouped[pos]?.length ? (
          <div key={pos} className="mb-24">
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-8 pb-4 px-1">
              {[...grouped[pos]]
                .sort(
                  (a, b) =>
                    (playerAssets[a.player.id]?.number || 99) -
                    (playerAssets[b.player.id]?.number || 99)
                )
                .map(({ player, statistics }) => {
                  const asset = playerAssets[player.id];
                  return (
                    <Link
                      key={player.id}
                      href={`/team/${player.id}`}
                      className="snap-start shrink-0 w-80 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-neutral-200 hover:scale-[1.03] hover:border-indigo-200"
                    >
                      <div className="relative w-full h-72 overflow-hidden rounded-t-3xl">
                        <img
                          src={asset?.image || player.photo}
                          alt={player.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 space-y-5">
                        <div className="flex items-center gap-6">
                          <span className="text-7xl font-extrabold text-indigo-600 leading-none tracking-tight">
                            {asset?.number ?? "?"}
                          </span>
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2">
                              {countryCodeMap[player.nationality] && (
                                <img
                                  src={`https://flagcdn.com/w40/${countryCodeMap[
                                    player.nationality
                                  ].toLowerCase()}.png`}
                                  alt={player.nationality}
                                  className="w-6 h-6 object-cover rounded-sm shadow-sm"
                                  loading="lazy"
                                />
                              )}
                              <span className="text-base text-neutral-500 font-medium">
                                {statistics?.[0]?.games?.position || "Unknown"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-indigo-600 transition tracking-tight">
                          {player.name}
                        </h3>

                        <p className="text-sm text-neutral-400">
                          {player.nationality}
                        </p>

                        <span className="inline-block mt-2 text-indigo-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                          View Stats →
                        </span>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
