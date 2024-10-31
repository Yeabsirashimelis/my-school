"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map components with ssr disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

function ContactUsMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [L, setL] = useState(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      setL(L.default);
      setIsMounted(true);
    });
  }, []);

  if (!isMounted) return null;

  const customIcon =
    L &&
    new L.Icon({
      iconUrl: "/marker-icon.png", // Move these to public directory
      iconRetinaUrl: "/marker-icon-2x.png",
      shadowUrl: "/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

  return (
    <div className="mt-4 h-[330px] w-full">
      {isMounted && (
        <MapContainer
          center={[8.7484, 38.9783]}
          zoom={12}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[8.7484, 38.9783]} icon={customIcon}>
            <Popup>
              <div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/schoolPhoto.jpg"
                  alt="School photo"
                  className="h-[60px] w-full"
                />
                <p>schoolname school</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default ContactUsMap;
