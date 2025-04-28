import { HeadlineService } from "@/lib/services/headlineService";
import { notFound } from "next/navigation";
import { HeadlineDetail } from "@/components/NewsPage/SingleNews/HeadlineDetail";
import { MoreHeadlines } from "@/components/NewsPage/SingleNews/MoreHeadlines";

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
      <HeadlineDetail headline={headline} />
      <MoreHeadlines headlines={otherHeadlines} />
    </div>
  );
}
