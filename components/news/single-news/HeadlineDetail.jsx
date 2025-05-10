"use client";

import { CalendarDays } from "lucide-react";

export function HeadlineDetail({ headline }) {
  return (
    <section className="pt-28 pb-20 px-6 bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto">
        <img
          src={headline.img}
          alt={headline.title}
          className="w-full h-[420px] object-cover rounded-xl shadow-lg mb-10 transition-transform duration-500 hover:scale-[1.01]"
        />
        <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight leading-tight">
          {headline.title}
        </h1>
        <div className="text-sm text-neutral-500 mb-8 flex items-center gap-3">
          <span className="font-medium">{headline.author.name}</span>
          <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-3.5 h-3.5" />
            {new Date(headline.createdAt).toLocaleDateString()}
          </div>
        </div>
        <p className="text-xl text-neutral-700 font-medium mb-8">
          {headline.description}
        </p>
        <div className="prose max-w-none text-lg leading-8 text-neutral-800 whitespace-pre-wrap">
          {headline.fullText}
        </div>
      </div>
    </section>
  );
}
