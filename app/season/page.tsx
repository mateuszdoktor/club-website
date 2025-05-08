import { getPastMatches } from "@/lib/services/matchService";
import { getStandings } from "@/lib/services/standingsService";
import ClientMatchList from "@/components/season/ClientMatchList";

export default async function SeasonPage() {
  const [matches, laliga, ucl] = await Promise.all([
    getPastMatches(),
    getStandings("PD"),
    getStandings("CL"),
  ]);

  if (!matches?.length || !laliga?.length || !ucl?.length) {
    return <p>Data error</p>;
  }

  return (
    <ClientMatchList
      matches={matches}
      laligaStandings={laliga}
      uclStandings={ucl}
    />
  );
}
