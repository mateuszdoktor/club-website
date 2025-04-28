import Link from "next/link";

export function HeadlineListItem({
  id,
  img,
  title,
  description,
}) {
  return (
    <Link href={`/news/${id}`} className="flex items-start space-x-6 group">
      <div className="flex-shrink-0 w-40 h-28 overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">{description.slice(0, 100)}...</p>
      </div>
    </Link>
  );
}
