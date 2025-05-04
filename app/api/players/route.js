export const customImages = {
  730: true,
  47400: true,
  733: true,
  372: true,
  505: true,
  2285: true,
  653: true,
  736: true,
  757: true,
  741: true,
  291964: true,
  129718: true,
  754: true,
  756: true,
  2207: true,
  1271: true,
  748: true,
  744: true,
  762: true,
  10009: true,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const team = searchParams.get("team");
  const season = searchParams.get("season");

  const allPlayers = [];
  let page = 1;
  let keepFetching = true;

  while (keepFetching) {
    const res = await fetch(
      `https://v3.football.api-sports.io/players?team=${team}&season=${season}&page=${page}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY,
        },
        next: { revalidate: 6000 },
      }
    );

    const data = await res.json();
    if (!data.response.length) {
      keepFetching = false;
    } else {
      allPlayers.push(...data.response);
      page++;
    }

    if (page > 5) break;
  }

  const filteredPlayers = allPlayers.filter((p) => customImages[p.player.id]);

  return Response.json({ response: filteredPlayers });
}
