import Link from "next/link";
import { CalendarDays } from "lucide-react";

export function FeaturedHeadlines({ headlines }) {
  return (
    <section className="mb-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Link
          href={`/news/${headlines[0].id}`}
          className="group relative rounded-2xl overflow-hidden shadow-xl flex flex-col justify-end min-h-[560px]"
        >
          {headlines[0].img && (
            <img
              src={headlines[0].img}
              alt={headlines[0].title}
              className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          )}
          <div className="relative p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-full">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
              {headlines[0].title}
            </h3>
            <p className="text-sm text-white/80 line-clamp-3">
              {headlines[0].description}
            </p>
            <div className="text-xs text-white/60 mt-4 flex items-center gap-2 font-mono">
              <CalendarDays className="w-3 h-3" />
              {new Date(headlines[0].createdAt).toLocaleDateString()}
            </div>
          </div>
        </Link>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {headlines.slice(1).map((h) => (
            <Link
              key={h.id}
              href={`/news/${h.id}`}
              className="group relative rounded-xl overflow-hidden shadow-md flex flex-col justify-end min-h-[260px]"
            >
              {h.img && (
                <img
                  src={h.img}
                  alt={h.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              )}
              <div className="relative p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end h-full">
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {h.title}
                </h4>
                <div className="text-xs text-white/60 flex items-center gap-2 font-mono">
                  <CalendarDays className="w-3 h-3" />
                  {new Date(h.createdAt).toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
