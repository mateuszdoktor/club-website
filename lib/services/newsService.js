export async function getGNews() {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q="real madrid"&in=title&lang=en&max=50&apikey=${process.env.GNEWS_API_KEY}`,
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

export async function getNewsData(country = "pl") {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&q=real+madrid&country=${country}&category=sports`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    console.error("NewsData API error:", res.status);
    throw new Error("Failed to fetch news from NewsData.io");
  }

  const data = await res.json();

  const filteredResults = data.results.filter(
    (article) => article.source_id !== "sport_pl"
  );

  return filteredResults;
}

