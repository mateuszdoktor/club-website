const API_URL = "https://api.football-data.org/v4/teams";
const TEAM_ID = 86; 
const SEASON = 2024;

const HEADERS = {
  "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
};
const OPTIONS = { headers: HEADERS, next: { revalidate: 6000 } };

const fetchMatches = async (params = {}) => {
  const url = new URL(`${API_URL}/${TEAM_ID}/matches`);
  url.searchParams.set("season", SEASON);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), OPTIONS);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  const { matches } = await res.json();
  return matches ?? [];
};

export const getAllMatches = async () => fetchMatches();

export const getUpcomingMatches = async () => {
  const matches = await getAllMatches();
  return matches.filter((m) => new Date(m.utcDate) > new Date());
};

export const getPastMatches = async () => {
  const matches = await getAllMatches();
  return matches
    .filter((m) => new Date(m.utcDate) <= new Date())
    .sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate));
};
