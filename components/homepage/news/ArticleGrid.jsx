import ArticleCard from "./ArticleCard";

export default function ArticleGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((item) => (
        <ArticleCard key={item.url} item={item} />
      ))}
    </div>
  );
}
