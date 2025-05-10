"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export function HeadlineListItem({ id, img, title, description, createdAt }) {
  return (
    <Link
      href={`/news/${id}`}
      className="group rounded-xl bg-white hover:bg-neutral-50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden border border-neutral-200 hover:border-[#0055A4]/30"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#0055A4] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-neutral-500 mt-2 flex items-center gap-2 font-mono">
          <CalendarDays className="w-3 h-3" />
          {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
}
