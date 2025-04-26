import { getGNews, getNewsData } from "@/lib/services/newsService";
import { HeadlineService } from "@/lib/services/headlineService";
import { Newspaper } from "lucide-react";
import { CountryNews } from "@/components/CountryNews"; // <-- import


export default async function NewsPage() {
  const [headlines, gnewsArticles] = await Promise.all([
    HeadlineService.getAllHeadlines(),
    getGNews(),
  ]);

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="flex items-center justify-center gap-3 text-4xl font-bold text-center mb-10 text-gray-900">
          <Newspaper className="w-10 h-10 text-primary-500" />
          Real Madrid Newsroom
        </h1>

        {/* Headlines Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Featured Headlines
          </h2>
          {headlines.length > 0 && (
            <div className="flex flex-col gap-6">
              <a
                // href={headlines[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {headlines[0].img && (
                  <img
                    src={headlines[0].img}
                    alt={headlines[0].title}
                    className="h-72 w-full object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {headlines[0].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {headlines[0].description}
                  </p>
                </div>
              </a>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {headlines.slice(1).map((headline: any) => (
                  <a
                    key={headline.id}
                    href={headline.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                  >
                    {headline.img && (
                      <img
                        src={headline.img}
                        alt={headline.title}
                        className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-md font-bold mb-2 group-hover:text-primary-500">
                        {headline.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1">
                        {headline.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* GNews Articles Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Latest News Articles (GNews)
          </h2>
          <div className="flex flex-col gap-8">
            {gnewsArticles.map((article: any, index: number) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full sm:w-60 object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </div>
                  <span className="text-blue-600 text-sm mt-4 inline-block">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Real Madrid News powered by NewsData.io */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Real Madrid News (Powered by NewsData.io)
          </h2>
          <CountryNews /> {/* <-- tutaj */}
        </section>
      </div>
    </div>
  );
}
