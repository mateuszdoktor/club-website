const BASE_URL = "https://api.football-data.org/v4";
const TEAM_ID = 86;
const SEASON = 2024;

const OPTIONS = {
  headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY },
  next: { revalidate: 6000 },
};

export const getAllMatches = async (
  teamId = TEAM_ID,
  season = SEASON,
  params = {}
) => {
  const url = new URL(`${BASE_URL}/teams/${teamId}/matches`);
  url.searchParams.set("season", season.toString());
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), OPTIONS);
  if (!res.ok) throw new Error(`Fetch error: ${res.status}`);

  const { matches } = await res.json();
  return matches ?? [];
};

export const getUpcomingMatches = async () => {
  const matches = await getAllMatches();
  return matches.filter((m) => new Date(m.utcDate) > new Date());
};

export const getPastMatches = async () => {
  const matches = await getAllMatches();
  return matches
    .filter((m) => new Date(m.utcDate) <= new Date())
    .sort((a, b) => new Date(b.utcDate).getTime() - new Date(a.utcDate).getTime());
};
