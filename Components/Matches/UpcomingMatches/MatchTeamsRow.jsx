export default function MatchTeamsRow({ home, away }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src={home.logo} alt={home.name} className="h-9 w-9" />{" "}
        {/* było 8x8 */}
        <span className="text-base font-medium text-gray-700">
          {home.name}
        </span>{" "}
        {/* było text-sm */}
      </div>
      <span className="text-gray-400 text-base font-semibold">vs</span>{" "}
      {/* text-sm → base */}
      <div className="flex items-center gap-2.5">
        <span className="text-base font-medium text-gray-700">{away.name}</span>
        <img src={away.logo} alt={away.name} className="h-9 w-9" />
      </div>
    </div>
  );
}
