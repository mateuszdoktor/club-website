const TEAM_ID = 86;
const API_BASE = "https://api.football-data.org/v4";
const HEADERS = { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY };
const OPTIONS = { headers: HEADERS, next: { revalidate: 6000 } };

import { playerAssets } from "@/lib/data/teamData";

export const getPlayers = async () => {
  const res = await fetch(`${API_BASE}/teams/${TEAM_ID}`, OPTIONS);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);

  const { squad } = await res.json();

  return squad
    .filter((p) => playerAssets[p.id])
    .map((p) => ({
      id: p.id,
      name: p.name,
      position: p.position,
      nationality: p.nationality,
      shirtNumber: playerAssets[p.id].number,
      image: playerAssets[p.id].image,
    }));
};
