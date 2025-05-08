export default function MatchTeamsRow({ home, away }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5 max-w-[140px] sm:max-w-[180px] overflow-hidden">
        <img src={home.crest} alt={home.name} className="h-9 w-9 shrink-0" />
        <span className="text-base font-medium text-gray-700 truncate">
          {home.name}
        </span>
      </div>
      <span className="text-gray-400 text-base font-semibold shrink-0">vs</span>
      <div className="flex items-center gap-2.5 max-w-[140px] sm:max-w-[180px] overflow-hidden justify-end">
        <span className="text-base font-medium text-gray-700 truncate text-right">
          {away.name}
        </span>
        <img src={away.crest} alt={away.name} className="h-9 w-9 shrink-0" />
      </div>
    </div>
  );
}
