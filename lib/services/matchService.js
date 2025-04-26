export async function getMatches() {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?team=541&season=2023`,
    {
      headers: {
        "x-rapidapi-key": process.env.API_FOOTBALL_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      next: { revalidate: 6000 },
    }
  );

  if (!res.ok) {
    console.error("HTTP error:", res.status);
    throw new Error("Failed to fetch matches");
  }

  const data = await res.json();
  return data.response;
}
