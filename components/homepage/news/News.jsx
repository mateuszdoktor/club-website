import NewsHeading from "@/components/homepage/news/NewsHeading";
import FeaturedArticle from "@/components/homepage/news/FeaturedArticle";
import ArticleGrid from "@/components/homepage/news/ArticleGrid";
import ArticleBar from "@/components/homepage/news/ArticleBar";

export default function News({ articles }) {
  try {
    if (!articles?.length) {
      return (
        <div className="p-6 bg-white border border-gray-200 rounded-xl max-w-7xl mx-auto my-8 text-center">
          <p className="text-neutral-600">No news available at this time.</p>
        </div>
      );
    }

    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          <NewsHeading />
          <FeaturedArticle article={articles[0]} />
          <ArticleGrid articles={articles.slice(1, 7)} />
          <ArticleBar articles={articles.slice(7, 10)} />
        </div>
      </section>
    );
  } catch (error) {
    return (
      <div className="p-6 bg-white border border-red-200 rounded-xl max-w-7xl mx-auto my-8 text-center">
        <p className="text-red-600">Error loading news content.</p>
      </div>
    );
  }
}
