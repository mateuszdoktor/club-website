import NewsHeading from "@/components/News/NewsHeading";
import FeaturedArticle from "@/components/News/FeaturedArticle";
import ArticleGrid from "@/components/News/ArticleGrid";
import ArticleBar from "@/components/News/ArticleBar";

async function getGNews() {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q="real madrid"&in=title&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`,
    {
      next: { revalidate: 6000 }, // ISR every 6000s to not use too many api requests
    }
  );

  if (!res.ok) {
    console.error("GNews API error:", res.status);
    throw new Error("Failed to fetch news from GNews");
  }

  const data = await res.json();
  return data.articles;
}

export default async function News() {
  try {
    const articles = await getGNews();
    if (!articles.length) return <p>No news available.</p>;

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
        <p>Error loading Real Madrid news: {error.message}</p>
      </div>
    );
  }
}
