import Link from "next/link";

export function FeaturedHeadlines({ headlines }) {
  if (headlines.length === 0) return null;

  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Link
          href={`/news/${headlines[0].id}`}
          className="group relative lg:col-span-1 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end min-h-[600px] bg-black"
        >
          {headlines[0].img && (
            <img
              src={headlines[0].img}
              alt={headlines[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
          )}
          <div className="relative p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-full">
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
              {headlines[0].title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-3">
              {headlines[0].description}
            </p>
          </div>
        </Link>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
          {headlines.slice(1).map((headline) => (
            <Link
              key={headline.id}
              href={`/news/${headline.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-md flex flex-col justify-end min-h-[280px] bg-gray-100"
            >
              {headline.img && (
                <img
                  src={headline.img}
                  alt={headline.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              )}
              <div className="relative p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end h-full">
                <h4 className="text-xl font-semibold text-white leading-tight mb-2 group-hover:text-primary-400 transition-colors">
                  {headline.title}
                </h4>
                <p className="text-gray-300 text-xs line-clamp-2">
                  {headline.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
