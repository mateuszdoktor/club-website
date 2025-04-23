export default function NextMatchHeader({ league }) {
  return (
    <div className="flex items-center gap-3">
      <img src={league.logo} alt={league.name} className="h-8 w-8" />
      <div className="text-sm text-white/70 font-medium">
        {league.name} – {league.round}
      </div>
    </div>
  );
}
