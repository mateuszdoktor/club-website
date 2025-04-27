import { HeadlineService } from "@/lib/services/headlineService"; 
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function HeadlinePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const headlines = await HeadlineService.getAllHeadlines();

  const headline = headlines.find((h) => h.id === Number(id));

  if (!headline) {
    notFound();
  }

  const otherHeadlines = headlines.filter((h) => h.id !== Number(id));

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-20">
        <img
          src={headline.img}
          alt={headline.title}
          className="w-full h-[500px] object-cover rounded-3xl shadow-lg mb-10 transition-transform hover:scale-105 duration-500"
        />
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          {headline.title}
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          By <span className="font-semibold">{headline.author}</span> ·{" "}
          {new Date(headline.createdAt).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {headline.description}
        </p>
        <div className="text-gray-900 text-md leading-8">
          {headline.fullText}
        </div>
      </div>

      <div className="space-y-10">
        <h2 className="text-3xl font-bold mb-6">More Headlines</h2>
        <div className="flex flex-col space-y-8">
          {otherHeadlines.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="flex items-start space-x-6 group"
            >
              <div className="flex-shrink-0 w-40 h-28 overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
