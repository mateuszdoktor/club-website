import { HeadlineService } from "@/lib/services/headlineService";
import { notFound } from "next/navigation";
import { HeadlineDetail } from "@/components/NewsPage/SingleNews/HeadlineDetail";
import { MoreHeadlines } from "@/components/NewsPage/SingleNews/MoreHeadlines";
import { CommentsSection } from "@/components/NewsPage/SingleNews/CommentsSection";

export default async function HeadlinePage(
  props: Promise<{ params: { id: string } }>
) {
  const { params } = await props;
  const { id } = await params;

  const headlines = await HeadlineService.getAllHeadlines();
  const headline = headlines.find((h) => h.id === id);

  if (!headline) return notFound();

  const others = headlines.filter((h) => h.id !== id);

  return (
    <main className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <HeadlineDetail headline={headline} />
        <MoreHeadlines headlines={others} />
        <CommentsSection headlineId={id} />
      </section>
    </main>
  );
}
