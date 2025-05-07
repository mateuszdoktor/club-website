import { getPastMatches } from "@/lib/services/matchService";
import {
  getLaLigaStandings,
  getChampionsLeagueStandings,
} from "@/lib/services/standingsService";
import ClientMatchList from "@/components/season/ClientMatchList";

export default async function SeasonPage() {
  const [matches, laliga, ucl] = await Promise.all([
    getPastMatches(),
    getLaLigaStandings(),
    getChampionsLeagueStandings(),
  ]);

  if (!matches || !laliga || !ucl) {
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
