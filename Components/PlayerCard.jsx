"use client";

import Link from "next/link";
import { playerAssets, countryCodeMap } from "@/lib/data/teamData";

export default function PlayerCard({ player, statistics }) {
  const asset = playerAssets[player.id];

  return (
    <Link
      href={`/team/${player.id}`}
      className="snap-start shrink-0 w-80 rounded-3xl bg-white/30 backdrop-blur-md border border-neutral-200 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_40px_rgba(99,102,241,0.3)] transition-all duration-300 group hover:scale-[1.04] z-[1] hover:z-[10] overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={asset?.image || player.photo}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card content */}
      <div className="p-6 space-y-5">
        <div className="flex items-center gap-6">
          <span className="text-7xl font-extrabold text-indigo-600 leading-none tracking-tight drop-shadow-sm">
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
                  className="w-6 h-6 object-cover rounded shadow-sm"
                  loading="lazy"
                />
              )}
              <span className="text-sm text-neutral-500 font-medium capitalize">
                {statistics?.[0]?.games?.position || "Unknown"}
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-indigo-600 transition tracking-tight">
          {player.name}
        </h3>

        <p className="text-sm text-neutral-400">{player.nationality}</p>

        <span className="inline-block mt-2 text-indigo-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
          View Stats →
        </span>
      </div>
    </Link>
  );
}
