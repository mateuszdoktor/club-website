import React from "react";

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
    return <p className="text-center text-gray-500">No articles found.</p>;
  }

  return (
    <div
      className={
        layout === "grid"
          ? "grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col gap-8"
      }
    >
      {articles.map((a) => (
        <a
          key={a[linkKey]}
          href={a[linkKey]}
          target="_blank"
          rel="noopener noreferrer"
          className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex ${
            layout === "grid"
              ? "flex-col h-full"
              : "flex-col sm:flex-row h-full"
          }`}
        >
          {a[imageKey] && (
            <div
              className={`relative w-full ${
                layout === "grid" ? "h-60" : "h-48 sm:h-auto sm:w-64"
              } overflow-hidden`}
            >
              <img
                src={a[imageKey]}
                alt={a[titleKey]}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          )}

          <div className="flex flex-col flex-1 justify-between p-6">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 leading-snug group-hover:text-primary-600 transition-colors">
                {a[titleKey]}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                {a[descriptionKey]}
              </p>
            </div>

            {(a[sourceKey] || a[dateKey]) && (
              <div className="text-sm text-gray-400 mt-6 flex items-center gap-2">
                {a[dateKey] && (
                  <span>{new Date(a[dateKey]).toLocaleDateString()}</span>
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
