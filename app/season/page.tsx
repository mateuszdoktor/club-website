import { getPastMatches } from "@/lib/services/matchService";
import ClientMatchList from "@/components/season/ClientMatchList";

export default async function SeasonPage() {
  const matches = await getPastMatches();
  return <ClientMatchList matches={matches} />;
}
