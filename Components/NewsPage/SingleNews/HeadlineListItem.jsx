"use client";

import Link from "next/link";

export function HeadlineListItem({ id, img, title, description }) {
  return (
    <Link
      href={`/news/${id}`}
      className="group rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden border border-gray-200"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}
