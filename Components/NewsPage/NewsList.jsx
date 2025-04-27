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
      {articles.map((article, index) => (
        <a
          key={index}
          href={article[linkKey]}
          target="_blank"
          rel="noopener noreferrer"
          className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex ${
            layout === "grid"
              ? "flex-col h-full"
              : "flex-col sm:flex-row h-full"
          }`}
        >
          {article[imageKey] && (
            <div
              className={`relative w-full ${
                layout === "grid"
                  ? "h-60" 
                  : "h-48 sm:h-auto sm:w-64"
              } overflow-hidden`}
            >
              <img
                src={article[imageKey]}
                alt={article[titleKey]}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          )}

          <div className="flex flex-col flex-1 justify-between p-6">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 leading-snug group-hover:text-primary-600 transition-colors duration-300">
                {article[titleKey]}
              </h3>
              <p className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                {article[descriptionKey]}
              </p>
            </div>

            {(article[sourceKey] || article[dateKey]) && (
              <div className="text-gray-400 text-sm mt-6 flex items-center gap-2">
                {article[dateKey] && (
                  <span>{new Date(article[dateKey]).toLocaleDateString()}</span>
                )}
                {article[sourceKey] && (
                  <>
                    <span>•</span>
                    <span>{article[sourceKey]}</span>
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
