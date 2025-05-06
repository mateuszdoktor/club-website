const STANDINGS_API_URL = "https://v3.football.api-sports.io/standings";
const SEASON = 2023;
const OPTIONS = {
  headers: {
    "x-rapidapi-key": process.env.API_FOOTBALL_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  next: { revalidate: 6000 }, 
};

const fetchStandings = async (leagueId) => {
  const url = new URL(STANDINGS_API_URL);
  url.searchParams.set("league", leagueId.toString());
  url.searchParams.set("season", SEASON.toString());

  const res = await fetch(url.toString(), OPTIONS);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const data = await res.json();
  return data.response[0].league.standings; 
};

export const getLaLigaStandings = async () => fetchStandings(140);
export const getChampionsLeagueStandings = async () => fetchStandings(2);
