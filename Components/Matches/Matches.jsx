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
  return data.response;
}

export default async function Matches() {
  try {
    const matches = await getMatches();

    if (!matches.length) {
      return <p>No upcoming matches available.</p>;
    }

    // Although the data comes from an external API and is expected to be in chronological order,
    // there was an issue where some fixtures appeared out of order.
    // This issue may be related to the fact that the data is from a past season,
    // and the API might not guarantee consistent ordering for archived fixtures.
    const sortedMatches = matches.sort((a, b) => {
      const dateA = new Date(a.fixture.date).getTime();
      const dateB = new Date(b.fixture.date).getTime();
      return dateA - dateB;
    });

    return (
      <div className="space-y-6">
        <NextMatch match={sortedMatches[0]} />
        <UpcomingMatches matches={sortedMatches.slice(1)} />
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
