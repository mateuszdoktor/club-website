import { getGNews } from "@/lib/services/newsService";
import { headlineService } from "@/lib/services/headlineService";
import { FeaturedHeadlines } from "@/components/news/FeaturedHeadlines";
import { CountryNews } from "@/components/news/CountryNews";
import { NewsList } from "@/components/news/NewsList";

export default async function NewsPage() {
  const [headlines, gnewsArticles] = await Promise.all([
    headlineService.getAllHeadlines(),
    getGNews(),
  ]);

  return (
    <main className="min-h-screen  text-gray-900 px-4 pt-28 pb-32 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-32">
        <section aria-label="Featured Headlines" className="space-y-12">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-5xl font-semibold tracking-tight">
              Featured Headlines
            </h1>
          </div>
          <FeaturedHeadlines headlines={headlines} />
        </section>

        <section aria-label="Latest News" className="space-y-12">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Latest News
            </h2>
          </div>
          <NewsList
            articles={gnewsArticles}
            imageKey="image"
            titleKey="title"
            descriptionKey="description"
            linkKey="url"
            layout="list"
          />
        </section>

        <section
          aria-label="Real Madrid News by Country"
          className="space-y-12"
        >
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Real Madrid News by Country
            </h2>
          </div>
          <CountryNews />
        </section>
      </div>
    </main>
  );
}
