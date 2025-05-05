import { CalendarDays } from "lucide-react";

export default function ArticleCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-5 flex flex-col justify-between h-full bg-white">
        <h4 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          {new Date(item.publishedAt).toLocaleDateString()} &bull;{" "}
          <span className="italic">{item.source?.name || "Unknown"}</span>
        </p>
      </div>
    </a>
  );
}
