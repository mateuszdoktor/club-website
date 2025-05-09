import { playerAssets } from "@/lib/data/teamData";

const TEAM_ID = 86;
const API_BASE = "https://api.football-data.org/v4";

const OPTIONS = {
  headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY! },
  next: { revalidate: 6000 },
};

export const getPlayers = async () => {
  const res = await fetch(`${API_BASE}/teams/${TEAM_ID}`, OPTIONS);
  if (!res.ok) throw new Error(`API error: ${res.status}`);

  const { squad } = await res.json();
  return squad
    .filter((p: any) => playerAssets[p.id])
    .map((p: any) => ({
      id: p.id,
      name: p.name,
      position: p.position,
      nationality: p.nationality,
      shirtNumber: playerAssets[p.id].number,
      image: playerAssets[p.id].image,
    }));
};
