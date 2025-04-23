export default function MatchTeamsRow({ home, away }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <img src={home.logo} alt={home.name} className="h-8 w-8" />
        <span className="text-sm font-medium text-gray-700">{home.name}</span>
      </div>
      <span className="text-gray-400 text-sm font-semibold">vs</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">{away.name}</span>
        <img src={away.logo} alt={away.name} className="h-8 w-8" />
      </div>
    </div>
  );
}
