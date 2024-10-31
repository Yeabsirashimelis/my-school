"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const customIcon = new L.Icon({
    iconUrl: "/marker-icon.png",
    iconRetinaUrl: "/marker-icon-2x.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[8.7484, 38.9783]}
      zoom={12}
      scrollWheelZoom={false}
      className="mt-4 h-[330px] w-full"
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
  );
}

export default MapComponent;
