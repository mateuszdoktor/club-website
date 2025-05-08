const positionMap = {
  Goalkeeper: "Goalkeeper",
  "Centre-Back": "Defender",
  "Left-Back": "Defender",
  "Right-Back": "Defender",
  Defender: "Defender",
  "Defensive Midfield": "Midfielder",
  "Central Midfield": "Midfielder",
  "Attacking Midfield": "Midfielder",
  Midfielder: "Midfielder",
  "Left Winger": "Attacker",
  "Right Winger": "Attacker",
  "Centre-Forward": "Attacker",
  "Second Striker": "Attacker",
  Attacker: "Attacker",
};

export const normalizePlayerPositions = (players) => {
  return players.map((player) => ({
    ...player,
    position: positionMap[player.position] || "Unknown",
  }));
};

export const orderedPositions = [
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Attacker",
];

export const groupPlayersByPosition = (players) => {
  return players.reduce((acc, player) => {
    const pos = player.position || "Unknown";
    if (!acc[pos]) acc[pos] = [];
    acc[pos].push(player);
    return acc;
  }, {});
};
