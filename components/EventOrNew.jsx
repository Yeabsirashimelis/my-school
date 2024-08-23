"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CustomError from "./CustomError";
import Spinner from "./Spinner";
import Image from "next/image";

function EventOrNew({ type }) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchEventOrNews() {
      try {
        const url =
          type === "events"
            ? `/api/news-and-events/events/${id}`
            : `/api/news-and-events/news/${id}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Can't get the ${type.slice(0, -1)}`);
        }

        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
        setErr(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEventOrNews();
  }, [id, type]);

  if (err) return <CustomError error={err} />;
  if (loading) return <Spinner loading={loading} />;

  const { title, description, content, images, author, updatedAt } = details;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {title.toUpperCase()}
      </h1>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      {images && images.length > 0 && (
        <div className="mb-6">
          {images.length === 1 ? (
            <div className="relative w-full h-96 mb-4">
              <Image
                src={images[0]}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                alt={title}
              />
            </div>
          ) : images.length === 2 ? (
            <div className="flex gap-4">
              <div className="w-1/2 relative h-96">
                <Image
                  src={images[0]}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                  alt={title}
                />
              </div>
              <div className="w-1/2 relative h-96">
                <Image
                  src={images[1]}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                  alt={title}
                />
              </div>
            </div>
          ) : images.length > 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative h-80">
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    alt={`${title} image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
      <div className="prose prose-gray mb-6">
        <p>{content}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow-md flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-800">
          AUTHOR: {author.toUpperCase()}
        </p>
        <p className="text-lg text-gray-600">
          DATE: {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default EventOrNew;
