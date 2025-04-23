import HeadlinesCarousel from "../components/Headlines/HeadlinesCarousel";
import Hero from "../components/Header/Hero";
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
      <Hero />
      <HeadlinesCarousel content={headlines} />
      <Matches />
    </div>
  );
}
