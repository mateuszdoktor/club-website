import { getGNews } from "@/lib/services/newsService";
import { HeadlineService } from "@/lib/services/headlineService";
import { FeaturedHeadlines } from "@/components/FeaturedHeadlines";
import { CountryNews } from "@/components/CountryNews";
import { NewsList } from "@/components/NewsList";
import SolidNavbar from "@/components/Header/Navbar/SolidNavbar";

export default async function NewsPage() {
  const [headlines, gnewsArticles] = await Promise.all([
    HeadlineService.getAllHeadlines(),
    getGNews(),
  ]);

  return (
    <>
      <SolidNavbar />
      <div className="min-h-screen bg-white px-4 py-8 sm:px-8">
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
              Real Madrid News (Powered by NewsData.io)
            </h2>
            <CountryNews />
          </section>
        </div>
      </div>
    </>
  );
}
