export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const team = searchParams.get("team");
  const season = searchParams.get("season");

  const res = await fetch(
    `https://v3.football.api-sports.io/players?id=${id}&team=${team}&season=${season}`,
    {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY,
      },
    }
  );

  const data = await res.json();
  return Response.json(data);
}
