"use client";

import { HeadlineListItem } from "./HeadlineListItem";

export function MoreHeadlines({ headlines }) {
  return (
    <section className="py-20 bg-white px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          More Headlines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {headlines.slice(0, 4).map((item) => (
            <HeadlineListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
