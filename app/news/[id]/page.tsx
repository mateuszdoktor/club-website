import { HeadlineService } from "@/lib/services/headlineService";
import { notFound } from "next/navigation";
import { HeadlineDetail } from "@/components/NewsPage/SingleNews/HeadlineDetail";
import { MoreHeadlines } from "@/components/NewsPage/SingleNews/MoreHeadlines";
import { CommentsSection } from "@/components/NewsPage/SingleNews/CommentsSection";
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
    <main className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <HeadlineDetail headline={headline} />
        <MoreHeadlines headlines={otherHeadlines} />
        <CommentsSection headlineId={Number(id)} />
      </section>
    </main>
  );

}
