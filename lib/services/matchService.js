const API_URL = "https://v3.football.api-sports.io/fixtures";
const TEAM_ID = 541;
const SEASON = 2023;

const SIMULATED_NOW = new Date("2024-04-20T12:00:00Z");

async function fetchMatches(params) {
  const url = new URL(API_URL);
  url.searchParams.append("team", TEAM_ID.toString());
  url.searchParams.append("season", SEASON.toString());

  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  const res = await fetch(url.toString(), {
    headers: {
      "x-rapidapi-key": process.env.API_FOOTBALL_KEY,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
    next: { revalidate: 6000 },
  });

  if (!res.ok) {
    console.error("HTTP error:", res.status);
    throw new Error("Failed to fetch matches");
  }

  const { response } = await res.json();
  return response;
}

export async function getAllMatches() {
  return await fetchMatches({});
}

export async function getUpcomingMatches() {
  const all = await getAllMatches();
  return all.filter((match) => new Date(match.fixture.date) > SIMULATED_NOW);
}

export async function getPastMatches() {
  const all = await getAllMatches();
  return all
    .filter((match) => new Date(match.fixture.date) <= SIMULATED_NOW)
    .sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date)); 
}

