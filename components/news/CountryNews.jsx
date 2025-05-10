"use client";

import { useState, useEffect } from "react";
import { NewsList } from "./NewsList";

const countries = [
  { code: "pl", name: "Poland" },
  { code: "es", name: "Spain" },
  { code: "it", name: "Italy" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "gb", name: "United Kingdom" },
];

export function CountryNews() {
  const [country, setCountry] = useState("es"); // Default to Spain
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const code = data?.country_code?.toLowerCase();
        if (countries.some((c) => c.code === code)) setCountry(code);
      } catch (err) {
        console.error("Country detection failed", err);
      }
    };
    detectUserCountry();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/newsdata?country=${country}`);
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch news", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [country]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => setCountry(c.code)}
            className={`flex items-center gap-2 border rounded-full px-4 py-2 text-sm transition-all ${
              country === c.code
                ? "bg-[#0055A4] border-[#0055A4] text-white"
                : "bg-white border-neutral-200 hover:border-[#0055A4]/50"
            }`}
          >
            <img
              src={`https://flagcdn.com/w40/${c.code}.png`}
              alt={c.name}
              className="w-5 h-3.5 object-cover rounded-sm"
            />
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0055A4]"></div>
        </div>
      ) : (
        <NewsList
          articles={articles}
          imageKey="image_url"
          titleKey="title"
          descriptionKey="description"
          linkKey="link"
          sourceKey="source_id"
          dateKey="pubDate"
          layout="list"
        />
      )}
    </div>
  );
}
