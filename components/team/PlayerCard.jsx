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
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-64 bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 hover:border-[#0055A4]/30 transition-all duration-300 cursor-pointer group"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={imageSrc}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-6">
          <span className="text-6xl font-black text-[#0055A4] leading-none tracking-tighter">
            {number}
          </span>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              {flag && (
                <img
                  src={`https://flagcdn.com/w40/${flag}.png`}
                  alt={player.nationality}
                  className="w-6 h-6 object-cover rounded shadow-sm border border-neutral-200"
                  loading="lazy"
                />
              )}
              <span className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                {position}
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-black text-neutral-900 group-hover:text-[#0055A4] transition-colors tracking-tight">
          {player.name}
        </h3>

        <p className="text-xs text-neutral-500 uppercase font-medium tracking-wider">
          {player.nationality}
        </p>

        <motion.span
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-2 text-[#0055A4] text-sm font-bold opacity-0 group-hover:opacity-100"
        >
          VIEW PROFILE →
        </motion.span>
      </div>
    </motion.div>
  );
}
