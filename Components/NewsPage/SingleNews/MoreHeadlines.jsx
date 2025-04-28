import { HeadlineListItem } from "./HeadlineListItem";

export function MoreHeadlines({ headlines }) {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold mb-6">More Headlines</h2>
      <div className="flex flex-col space-y-8">
        {headlines.map((item) => (
          <HeadlineListItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
