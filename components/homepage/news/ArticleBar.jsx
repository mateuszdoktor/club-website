import { CalendarDays, ExternalLink } from "lucide-react";

export default function ArticleBar({ articles }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex gap-6 snap-x snap-mandatory px-1 pb-4">
      {articles.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="snap-start min-w-[300px] bg-white hover:bg-gray-50 p-6 rounded-xl transition-all border border-gray-200 hover:border-[#0055A4]/30 flex flex-col gap-3 shadow-sm hover:shadow-md"
        >
          <h5 className="text-lg font-semibold text-neutral-900 line-clamp-2">
            {item.title}
          </h5>
          <p className="text-xs text-neutral-500 flex items-center gap-2 font-mono">
            <CalendarDays className="w-3 h-3 text-[#0055A4]" />
            {new Date(item.publishedAt).toLocaleDateString()} &bull;{" "}
            {item.source?.name || "Unknown"}
          </p>
          <span className="text-[#0055A4] text-sm font-medium flex items-center gap-1 mt-2">
            Read more <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      ))}
    </div>
  );
}
