"use client";

import { useMemo, useState } from "react";

export default function PlayerProfileClient({
  statistics,
  player,
  asset,
  flagCode,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const realMadridStats = useMemo(() => {
    const seen = new Set();
    return statistics.filter((s) => {
      if (s.team.id !== 541 || seen.has(s.league.name)) return false;
      seen.add(s.league.name);
      return true;
    });
  }, [statistics]);

  const competitions = useMemo(
    () =>
      realMadridStats.map(({ league }) => ({
        name: league.name,
        logo: league.logo,
      })),
    [realMadridStats]
  );

  const stats = useMemo(
    () => realMadridStats[selectedIndex],
    [realMadridStats, selectedIndex]
  );

  return (
    <div className="space-y-14">
      <div className="relative grid grid-cols-1 md:grid-cols-[350px_1fr] gap-16 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 rounded-3xl shadow-2xl border border-neutral-200 p-12 md:p-20 overflow-hidden">
        <div className="relative flex flex-col items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl w-full aspect-[3/4]">
            <img
              src={asset?.image || player.photo}
              alt={player.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-6 left-6 bg-indigo-600 text-white px-4 py-1 rounded-xl text-sm font-semibold shadow-lg">
            #{asset?.number ?? "–"}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight flex items-center gap-4">
              {player.name}
              {flagCode && (
                <img
                  src={`https://flagcdn.com/w40/${flagCode}.png`}
                  alt={player.nationality}
                  className="w-7 h-5 rounded-sm border border-neutral-300 shadow"
                  loading="lazy"
                />
              )}
            </h1>
            <p className="text-neutral-500 mt-4 text-lg font-medium">
              {player.age} y/o &middot; {player.nationality} &middot;{" "}
              {stats?.games?.position || player.position || "Unknown"}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {competitions.map((c, index) => (
              <button
                key={c.name}
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm ${
                  selectedIndex === index
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border-neutral-200"
                }`}
              >
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-5 h-5 object-contain"
                  />
                )}
                {c.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 divide-y divide-neutral-200">
            {renderStatGroup("General", [
              { label: "Appearances", value: stats?.games?.appearences },
              { label: "Minutes", value: stats?.games?.minutes },
              { label: "Rating", value: formatRating(stats?.games?.rating) },
              { label: "Position", value: stats?.games?.position },
            ])}

            {renderStatGroup("Attacking", [
              { label: "Goals", value: stats?.goals?.total },
              { label: "Assists", value: stats?.goals?.assists },
              { label: "Shots", value: stats?.shots?.total },
              { label: "On Target", value: stats?.shots?.on },
              { label: "Dribbles", value: formatDribbles(stats) },
              { label: "Key Passes", value: stats?.passes?.key },
            ])}

            {renderStatGroup("Passing", [
              {
                label: "Pass Accuracy",
                value: formatPercent(stats?.passes?.accuracy),
              },
              {
                label: "Crosses",
                value: safeStat(stats?.passes?.crosses?.total),
              },
              {
                label: "Long Balls",
                value: safeStat(stats?.passes?.long?.total),
              },
              { label: "Total Passes", value: safeStat(stats?.passes?.total) },
              { label: "Key Passes", value: safeStat(stats?.passes?.key) },
            ])}

            {renderStatGroup("Defensive", [
              { label: "Tackles", value: stats?.tackles?.total },
              { label: "Interceptions", value: stats?.tackles?.interceptions },
              { label: "Blocks", value: stats?.tackles?.blocks },
              { label: "Duels Won", value: formatDuels(stats?.duels) },
            ])}

            {renderStatGroup("Discipline", [
              { label: "Fouls Drawn", value: stats?.fouls?.drawn },
              { label: "Fouls Committed", value: stats?.fouls?.committed },
              { label: "Yellow Cards", value: stats?.cards?.yellow },
              { label: "Red Cards", value: stats?.cards?.red },
            ])}

            {renderStatGroup("Penalties", [
              { label: "Scored", value: stats?.penalty?.scored },
              { label: "Missed", value: stats?.penalty?.missed },
              { label: "Won", value: stats?.penalty?.won },
              { label: "Committed", value: stats?.penalty?.commited },
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderStatGroup(title, statsArray) {
  const filtered = statsArray.filter(
    ({ value }) => value != null && value !== "–"
  );
  if (filtered.length === 0) return null;

  return (
    <StatGroup title={title}>
      {filtered.map((s) => (
        <Stat key={s.label} label={s.label} value={s.value} />
      ))}
    </StatGroup>
  );
}

function StatGroup({ title, children }) {
  return (
    <div className="pt-6">
      <h3 className="text-sm font-semibold text-neutral-500 tracking-widest uppercase mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all border border-neutral-100 px-5 py-4 text-center">
      <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className="text-xl font-bold text-neutral-900">{value}</div>
    </div>
  );
}

const formatDribbles = (stats) => {
  const s = stats?.dribbles?.success;
  const a = stats?.dribbles?.attempts;
  return s == null && a == null ? null : `${s ?? "–"}/${a ?? "–"}`;
};

const formatDuels = (duels) =>
  duels ? `${duels.won ?? "–"}/${duels.total ?? "–"}` : null;

const formatRating = (rating) => {
  const val = parseFloat(rating);
  return isNaN(val) ? null : val.toFixed(1);
};

const formatPercent = (value) => (value != null ? `${value}%` : null);

const safeStat = (value) => (value != null ? value : null);
