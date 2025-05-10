import React from "react";
import { CalendarDays } from "lucide-react";

export function NewsList({
  articles,
  imageKey = "image_url",
  titleKey = "title",
  descriptionKey = "description",
  linkKey = "link",
  sourceKey = "source_id",
  dateKey = "pubDate",
  layout = "grid",
}) {
  if (!articles?.length) {
    return (
      <p className="text-center text-neutral-500 py-12">No articles found.</p>
    );
  }

  return (
    <div
      className={
        layout === "grid"
          ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {articles.map((a) => (
        <a
          key={a[linkKey]}
          href={a[linkKey]}
          target="_blank"
          rel="noopener noreferrer"
          className={`group overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-[#0055A4]/30 transition-all shadow-sm hover:shadow-md flex ${
            layout === "grid"
              ? "flex-col h-full"
              : "flex-col sm:flex-row h-full"
          }`}
        >
          {a[imageKey] && (
            <div
              className={`relative w-full ${
                layout === "grid" ? "h-52" : "h-48 sm:h-auto sm:w-64"
              } overflow-hidden`}
            >
              <img
                src={a[imageKey]}
                alt={a[titleKey]}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          )}

          <div className="flex flex-col flex-1 justify-between p-6">
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-neutral-900 leading-snug group-hover:text-[#0055A4] transition-colors">
                {a[titleKey]}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed line-clamp-3">
                {a[descriptionKey]}
              </p>
            </div>

            {(a[sourceKey] || a[dateKey]) && (
              <div className="text-xs text-neutral-500 mt-6 flex items-center gap-2 font-mono">
                {a[dateKey] && (
                  <>
                    <CalendarDays className="w-3 h-3 text-[#0055A4]" />
                    <span>{new Date(a[dateKey]).toLocaleDateString()}</span>
                  </>
                )}
                {a[sourceKey] && (
                  <>
                    <span>•</span>
                    <span>{a[sourceKey]}</span>
                  </>
                )}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
