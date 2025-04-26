export async function getGNews() {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q="real madrid"&in=title&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    console.error("GNews API error:", res.status);
    throw new Error("Failed to fetch news from GNews");
  }

  const data = await res.json();
  return data.articles;
}
