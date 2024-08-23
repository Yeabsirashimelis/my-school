"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import CustomError from "./CustomError";
import { Gallery, Item } from "react-photoswipe-gallery";

function Galleries() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchGalleries() {
      try {
        const res = await fetch("/api/galleries");
        if (!res.ok) throw new Error("Failed to fetch galleries");
        const data = await res.json();
        setGalleries(data);
      } catch (error) {
        setErr(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchGalleries();
  }, []);

  if (loading) return <Spinner loading={loading} />;
  if (err) return <CustomError error={err} />;

  const allImages = galleries.flatMap((gallery) => gallery.images);

  return (
    <div className="mt-8 space-y-12 px-4 md:px-8 lg:px-16">
      <div>
        <h1 className="text-center text-red-800 text-4xl font-bold">
          OUR
          <span className="text-5xl"> G</span>ALLERY
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Explore the beautiful moments captured at our school.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Gallery>
          {allImages.map((image, index) => (
            <div key={index} className="relative">
              <Item original={image} thumbnail={image} width="600" height="400">
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className="w-full h-full rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-90 hover:ring-1 hover:ring-gray-400"
                  />
                )}
              </Item>
            </div>
          ))}
        </Gallery>
      </div>
    </div>
  );
}

export default Galleries;
