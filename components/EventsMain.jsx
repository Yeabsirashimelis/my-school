"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import CustomError from "./CustomError";
import Spinner from "./Spinner";

function EventsMain({ type }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [events, setEvents] = useState([]);

  const typeOfCard = type.toUpperCase();
  const firstLetter = typeOfCard[0];
  const theRest = typeOfCard.slice(1).toLowerCase();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/news-and-events/events");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await res.json();
        setEvents(data);
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
  if (err) return <CustomError error={err} />;

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-red-800 text-4xl font-bold">
        <span className="text-5xl">{firstLetter}</span>
        {theRest}
      </h1>
      {events.length === 0 ? (
        <p className="mt-8 text-center text-lg text-gray-600">
          <span className="block text-2xl font-semibold text-red-600">
            No Events Available
          </span>
          Check back later for upcoming events.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:px-8 md:py-12 sm:grid-cols-2 md:grid-cols-3">
          {events.map((item) => (
            <Card type="events" item={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EventsMain;
