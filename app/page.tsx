import { getUpcomingMatches } from "@/lib/services/matchService";
import { getGNews } from "@/lib/services/newsService";
import { HeadlineService } from "@/lib/services/headlineService";

import HeadlinesCarousel from "@/components/homepage/headlines/HeadlinesCarousel";
import Matches from "@/components/homepage/matches/Matches";
import News from "@/components/homepage/news/News";
import Header from "@/components/layout/header/Header";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [headlines, matches, newsArticles] = await Promise.all([
    HeadlineService.getAllHeadlines(),
    getUpcomingMatches(),
    getGNews(),
  ]);

  return (
    <div>
      <Header />
      <HeadlinesCarousel content={headlines} />
      <Matches matches={matches} />
      <News articles={newsArticles} />
    </div>
  );
}
