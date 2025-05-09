"use client";

import { countryCodeMap } from "@/lib/data/teamData";
import { motion } from "framer-motion";

export default function PlayerCard({ player }) {
  const imageSrc = player.image || "";
  const position = player.position || "Unknown";
  const number = player.shirtNumber ?? "?";
  const flag = countryCodeMap[player.nationality]?.toLowerCase();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer group"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={imageSrc}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-5">
        <div className="flex items-center gap-6">
          <span className="text-7xl font-extrabold text-indigo-600 leading-none tracking-tight drop-shadow-sm">
            {number}
          </span>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              {flag && (
                <img
                  src={`https://flagcdn.com/w40/${flag}.png`}
                  alt={player.nationality}
                  className="w-6 h-6 object-cover rounded shadow-sm"
                  loading="lazy"
                />
              )}
              <span className="text-sm text-neutral-500 font-medium capitalize">
                {position}
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-indigo-600 transition tracking-tight">
          {player.name}
        </h3>

        <p className="text-sm text-neutral-400">{player.nationality}</p>

        <motion.span
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-2 text-indigo-500 text-sm font-semibold opacity-0 group-hover:opacity-100"
        >
          View Stats →
        </motion.span>
      </div>
    </motion.div>
  );
}
