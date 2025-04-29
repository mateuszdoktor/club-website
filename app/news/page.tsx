import { getGNews } from "@/lib/services/newsService";
import { HeadlineService } from "@/lib/services/headlineService";
import { FeaturedHeadlines } from "@/components/NewsPage/FeaturedHeadlines";
import { CountryNews } from "@/components//NewsPage/CountryNews";
import { NewsList } from "@/components/NewsPage/NewsList";

export default async function NewsPage() {
  const [headlines, gnewsArticles] = await Promise.all([
    HeadlineService.getAllHeadlines(),
    getGNews(),
  ]);

  return (
    <div className="min-h-screen bg-white px-4 pt-24 pb-48 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FeaturedHeadlines headlines={headlines} />
        <NewsList
          articles={gnewsArticles}
          imageKey="image"
          titleKey="title"
          descriptionKey="description"
          linkKey="url"
          layout="list"
        />
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Real Madrid News by Country
          </h2>
          <CountryNews />
        </section>
      </div>
    </div>
  );
}


