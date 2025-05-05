import { getPastMatches } from "@/lib/services/matchService";
import ClientMatchList from "@/components/ClientMatchList";

export const dynamic = "force-dynamic";

export default async function SeasonPage() {
  const matches = await getPastMatches();
  return <ClientMatchList matches={matches} />;
}
