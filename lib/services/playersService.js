export const customImageIds = new Set([
  730, 47400, 733, 372, 505, 2285, 653, 736, 757, 741, 291964, 129718, 754, 756,
  2207, 1271, 748, 744, 762, 10009,
]);

export const TEAM_ID = 541;
export const SEASON = 2023;
export const MAX_PAGES = 5;

const API_KEY = process.env.API_FOOTBALL_KEY;
const HEADERS = {
  "x-apisports-key": API_KEY,
};
const NEXT_OPTIONS = { next: { revalidate: 6000 } };

export async function getPlayers() {
  const allPlayers = [];

  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(
      `https://v3.football.api-sports.io/players?team=${TEAM_ID}&season=${SEASON}&page=${page}`,
      { headers: HEADERS, ...NEXT_OPTIONS }
    );

    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const data = await res.json();

    if (!data.response.length) break;
    allPlayers.push(...data.response);
  }

  return allPlayers.filter((p) => customImageIds.has(p.player.id));
}

export async function getPlayer({ id, season = SEASON }) {
  const res = await fetch(
    `https://v3.football.api-sports.io/players?id=${id}&season=${season}`,
    { headers: HEADERS, ...NEXT_OPTIONS }
  );

  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();

  return data.response[0];
}

