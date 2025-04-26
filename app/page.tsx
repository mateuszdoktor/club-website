import HeadlinesCarousel from "../components/Headlines/HeadlinesCarousel";
import Header from "../components/Header/Header";
import Matches from "../components/Matches/Matches";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import { HeadlineService } from "@/lib/services/headlineService";

export const dynamic = "force-dynamic";

export default async function Home() {
  const headlines = await HeadlineService.getAllHeadlines();

  return (
    <div>
      <Header />
      <HeadlinesCarousel content={headlines} />
      <Matches />
      <News />
      <Footer />
    </div>
  );
}
