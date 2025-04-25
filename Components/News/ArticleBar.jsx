import { CalendarDays, ExternalLink } from "lucide-react";

export default function ArticleBar({ articles }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex gap-6 snap-x snap-mandatory px-1 pb-2">
      {articles.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="snap-start min-w-[300px] bg-gray-50 hover:bg-gray-100 p-4 rounded-2xl transition border border-gray-200 flex flex-col gap-3"
        >
          <h5 className="text-base font-medium text-gray-800 line-clamp-2">
            {item.title}
          </h5>
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <CalendarDays className="w-3 h-3" />
            {new Date(item.publishedAt).toLocaleDateString()} &bull;{" "}
            {item.source?.name || "Unknown"}
          </p>
          <span className="text-indigo-600 text-sm font-medium flex items-center gap-1">
            Read more <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      ))}
    </div>
  );
}
