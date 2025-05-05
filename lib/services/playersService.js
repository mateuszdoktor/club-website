const TEAM_ID = 541;
const SEASON = 2023;
const MAX_PAGES = 5;

const customImageIds = new Set([
  730, 47400, 733, 372, 505, 2285, 653, 736, 757, 741, 291964, 129718, 754, 756,
  2207, 1271, 748, 744, 762, 10009,
]);

const API_URL = "https://v3.football.api-sports.io/players";
const HEADERS = { "x-apisports-key": process.env.API_FOOTBALL_KEY };
const OPTIONS = { headers: HEADERS, next: { revalidate: 6000 } };

export const getPlayers = async () => {
  const all = [];

  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(
      `${API_URL}?team=${TEAM_ID}&season=${SEASON}&page=${page}`,
      OPTIONS
    );
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const { response } = await res.json();
    if (!response.length) break;
    all.push(...response);
  }

  return all.filter((p) => customImageIds.has(p.player.id));
};

export const getPlayer = async ({ id, season = SEASON }) => {
  const res = await fetch(`${API_URL}?id=${id}&season=${season}`, OPTIONS);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const { response } = await res.json();
  return response[0];
};
