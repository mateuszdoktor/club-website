import HeadlinesCarousel from "../components/Headlines/HeadlinesCarousel";
import Header from "../components/Header/Header";
import Matches from "../components/Matches/Matches";

async function getHeadlines() {
  const res = await fetch("http://localhost:3000/api/headlines", {
    cache: "no-store", // SSR — fetch za każdym razem
  });
  if (!res.ok) throw new Error("Failed to fetch headlines");
  return res.json();
}

export default async function Home() {
  const headlines = await getHeadlines();
  return (
    <div>
      <Header />
      <HeadlinesCarousel content={headlines} />
      <Matches />
    </div>
  );
}
