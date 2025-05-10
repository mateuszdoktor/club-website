"use client";

import { HeadlineListItem } from "./HeadlineListItem";
import { Newspaper } from "lucide-react";

export function MoreHeadlines({ headlines }) {
  return (
    <section className="py-20 bg-white px-6 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Newspaper className="w-6 h-6 text-[#0055A4]" />
          <h2 className="text-3xl font-black text-neutral-900 text-center">
            MORE REAL MADRID NEWS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlines.slice(0, 4).map((item) => (
            <HeadlineListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
