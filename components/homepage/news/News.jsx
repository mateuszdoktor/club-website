import NewsHeading from "@/components/homepage/news/NewsHeading";
import FeaturedArticle from "@/components/homepage/news/FeaturedArticle";
import ArticleGrid from "@/components/homepage/news/ArticleGrid";
import ArticleBar from "@/components/homepage/news/ArticleBar";

export default function News({ articles }) {
  try {
    if (!articles?.length) {
      return (
        <div className="p-4 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded max-w-4xl mx-auto my-8">
          <p>No news available.</p>
        </div>
      );
    }

    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-[92%] mx-auto flex flex-col gap-14">
          <NewsHeading />
          <FeaturedArticle article={articles[0]} />
          <ArticleGrid articles={articles.slice(1, 7)} />
          <ArticleBar articles={articles.slice(7, 10)} />
        </div>
      </section>
    );
  } catch (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 border border-red-300 rounded max-w-4xl mx-auto my-8">
        <p>Error displaying news: {error.message}</p>
      </div>
    );
  }
}
