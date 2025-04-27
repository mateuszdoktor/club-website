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
  const [country, setCountry] = useState("pl");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function detectUserCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.country_code) {
          const userCountry = data.country_code.toLowerCase();
          const supportedCountry = countries.find(
            (c) => c.code === userCountry
          );
          if (supportedCountry) {
            setCountry(userCountry);
          }
        }
      } catch (error) {
        console.error("Could not detect country", error);
      }
    }
    detectUserCountry();
  }, []);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(`/api/newsdata?country=${country}`);
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load news", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [country]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => setCountry(c.code)}
            className={`flex items-center gap-2 border rounded-full px-4 py-2 text-lg transition-all
            ${
              country === c.code
                ? "bg-primary-100 border-primary-500 text-primary-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img
              src={`https://flagcdn.com/w40/${c.code}.png`}
              alt={c.name}
              className="w-6 h-4 object-cover rounded-sm"
            />
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
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
