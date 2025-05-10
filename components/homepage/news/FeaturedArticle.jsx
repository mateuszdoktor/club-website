import { CalendarDays } from "lucide-react";

export default function FeaturedArticle({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-[600px] rounded-2xl overflow-hidden group shadow-xl"
    >
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-10 relative"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10 z-20">
        <h3 className="text-4xl font-black text-white tracking-tight">
          {article.title}
        </h3>
        <p className="text-sm text-white/80 mt-4 flex items-center gap-2 font-mono">
          <CalendarDays className="w-4 h-4 text-white" />
          {new Date(article.publishedAt).toLocaleDateString()} &bull;{" "}
          <span className="italic">{article.source?.name || "Unknown"}</span>
        </p>
      </div>
    </a>
  );
}
