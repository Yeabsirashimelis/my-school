"use client";
import Image from "next/image";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";

function ContactUsMap() {
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerRetina,
    shadowUrl: markerShadow,
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
              className=" h-[60px] w-full"
            />
            <p>schoolname school</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactUsMap;
