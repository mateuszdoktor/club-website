// app/page.tsx
import { getMatches } from "@/lib/services/matchService";
import { getGNews } from "@/lib/services/newsService";
import { HeadlineService } from "@/lib/services/headlineService";

import HeadlinesCarousel from "@/components/Headlines/HeadlinesCarousel";
import Matches from "@/components/Matches/Matches";
import News from "@/components/News/News";
import Header from "@/components/Header/Header";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [headlines, matches, newsArticles] = await Promise.all([
    HeadlineService.getAllHeadlines(),
    getMatches(),
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
