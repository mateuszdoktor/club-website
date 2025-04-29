"use client";

import { HeadlineListItem } from "./HeadlineListItem";

export function MoreHeadlines({ headlines }) {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
        More Headlines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0">
        {headlines.slice(0, 4).map((item) => (
          <HeadlineListItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
