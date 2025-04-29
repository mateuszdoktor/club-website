"use client";

import Link from "next/link";

export function HeadlineListItem({ id, img, title, description }) {
  return (
    <Link
      href={`/news/${id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed">
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}
