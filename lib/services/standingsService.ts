const BASE_URL = "https://api.football-data.org/v4/competitions";

const OPTIONS = {
  headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY! },
  next: { revalidate: 6000 },
};

const formatStanding = (entry: any) => ({
  id: entry.team.id,
  name: entry.team.name,
  crest: entry.team.crest,
  position: entry.position,
  points: entry.points,
  won: entry.won,
  draw: entry.draw,
  lost: entry.lost,
  goalDifference: entry.goalDifference,
});

export const getStandings = async (code: string) => {
  const res = await fetch(`${BASE_URL}/${code}/standings`, OPTIONS);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

  const json = await res.json();
  const table = json.standings?.[0]?.table ?? [];
  return table.map(formatStanding);
};
