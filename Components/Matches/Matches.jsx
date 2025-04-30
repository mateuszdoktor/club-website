import NextMatch from "./NextMatch/NextMatch";
import UpcomingMatches from "./UpcomingMatches/UpcomingMatches";

export default function Matches({ matches }) {
  try {
    if (!matches?.length) {
      return (
        <div className="p-4 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded">
          <p>No upcoming matches available.</p>
        </div>
      );
    }

    const sorted = matches.sort(
      (a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)
    );

    return (
      <div className="space-y-6">
        <NextMatch match={sorted[0]} />
        <UpcomingMatches matches={sorted.slice(1)} />
      </div>
    );
  } catch (err) {
    return (
      <div className="p-4 bg-red-100 text-red-800 border border-red-300 rounded">
        <p>Error displaying matches: {err.message}</p>
      </div>
    );
  }
}
