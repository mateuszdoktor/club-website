export const orderedPositions = [
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Attacker",
  "Unknown",
];

export function groupPlayersByPosition(players) {
  return players.reduce((acc, { player, statistics }) => {
    const position = statistics?.[0]?.games?.position || "Unknown";
    if (!acc[position]) acc[position] = [];
    acc[position].push({ player, statistics });
    return acc;
  }, {});
}
