"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

function NewsMain({ type }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [news, setNews] = useState([]);

  const typeOfCard = type.toUpperCase();
  const firstLetter = typeOfCard[0];
  const theRest = typeOfCard.slice(1).toLowerCase();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/news-and-events/news");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        setErr(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-[#0a1d30] text-4xl font-bold">
        <span className="text-5xl">N</span>EWS
      </h1>
      <div className="grid grid-cols-1 gap-8 px-4 py-8  sm:px-6 md:px-8 md:py-12 sm:grid-cols-2 md:grid-cols-3 ">
        {news.map((item) => (
          <Card item={item} type="news" key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default NewsMain;
