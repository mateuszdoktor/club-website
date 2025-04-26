import NextMatch from "./NextMatch/NextMatch";
import UpcomingMatches from "./UpcomingMatches/UpcomingMatches";

export default function Matches({ matches }) {
  try {
    if (!matches || matches.length === 0) {
      return (
        <div className="p-4 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded">
          <p>No upcoming matches available.</p>
        </div>
      );
    }

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
        <p>Error displaying matches: {error.message}</p>
      </div>
    );
  }
}
