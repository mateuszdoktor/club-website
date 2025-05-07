const API_URL = "https://v3.football.api-sports.io/fixtures";
const TEAM_ID = 541;
const SEASON = 2023;
const SIMULATED_NOW = new Date("2024-04-20T12:00:00Z");

const HEADERS = {
  "x-rapidapi-key": process.env.API_FOOTBALL_KEY,
  "x-rapidapi-host": "v3.football.api-sports.io",
};
const OPTIONS = { headers: HEADERS, next: { revalidate: 6000 } };

const fetchMatches = async (params) => {
  const url = new URL(API_URL);
  url.searchParams.set("team", TEAM_ID.toString());
  url.searchParams.set("season", SEASON.toString());
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), OPTIONS);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  const { response } = await res.json();
  return response ?? [];
};

export const getAllMatches = async () => fetchMatches({});

export const getUpcomingMatches = async () => {
  const matches = await getAllMatches();
  return matches.filter((m) => new Date(m.fixture.date) > SIMULATED_NOW);
};

export const getPastMatches = async () => {
  const matches = await getAllMatches();
  return matches
    .filter((m) => new Date(m.fixture.date) <= SIMULATED_NOW)
    .sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date));
};
