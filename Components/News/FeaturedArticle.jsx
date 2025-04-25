import { CalendarDays } from "lucide-react";

export default function FeaturedArticle({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-[450px] rounded-3xl overflow-hidden group shadow-xl"
    >
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-3xl font-bold text-white">{article.title}</h3>
        <p className="text-sm text-gray-200 mt-2 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          {new Date(article.publishedAt).toLocaleDateString()} &bull;{" "}
          <span className="italic">{article.source?.name || "Unknown"}</span>
        </p>
      </div>
    </a>
  );
}
