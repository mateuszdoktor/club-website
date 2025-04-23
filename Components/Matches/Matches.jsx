import NextMatch from "./NextMatch/NextMatch";
import UpcomingMatches from "./UpcomingMatches/UpcomingMatches";

async function getMatches() {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?team=541&season=2023`,
    {
      headers: {
        "x-rapidapi-key": process.env.API_FOOTBALL_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      next: { revalidate: 6000 }, // ISR every 6000s
    }
  );

  if (!res.ok) {
    console.error("HTTP error:", res.status);
    throw new Error("Failed to fetch matches");
  }

  const data = await res.json();
  console.log("RESPONSE:", JSON.stringify(data, null, 2));
  return data.response;
}

export default async function Matches() {
  try {
    const matches = await getMatches();

    if (!matches.length) {
      return <p>No upcoming matches available.</p>;
    }

    return (
      <div className="space-y-6">
        <NextMatch match={matches[0]} />
        <UpcomingMatches matches={matches.slice(1)} />
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 border border-red-300 rounded">
        <p>Error: {error.message}</p>
      </div>
    );
  }
}
