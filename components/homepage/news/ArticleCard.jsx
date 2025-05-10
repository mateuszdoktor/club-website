import { CalendarDays } from "lucide-react";

export default function ArticleCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[#0055A4]/20"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-6 flex flex-col justify-between h-full bg-white">
        <h4 className="text-xl font-bold text-neutral-900 line-clamp-2">
          {item.title}
        </h4>
        <p className="text-xs text-neutral-500 mt-4 flex items-center gap-2 font-mono">
          <CalendarDays className="w-4 h-4 text-[#0055A4]" />
          {new Date(item.publishedAt).toLocaleDateString()} &bull;{" "}
          <span className="italic">{item.source?.name || "Unknown"}</span>
        </p>
      </div>
    </a>
  );
}
