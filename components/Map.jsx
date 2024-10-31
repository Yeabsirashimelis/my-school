"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <div className="mt-4 h-[330px] w-full bg-gray-100" />,
});

export default function Map() {
  return <MapComponent />;
}
