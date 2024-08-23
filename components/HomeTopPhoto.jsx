"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImg from "../assets/images/homephoto.jpg";

function HomeTopPhoto() {
  return (
    <div className="relative bg-gray-100 py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImg}
          alt="School Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Text Content */}
      <div className="relative container mx-auto px-4 text-gray-50 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6"
        >
          Welcome to EBENEZER School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl leading-relaxed mb-8 md:mb-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          asperiores, libero doloremque in a at beatae harum laborum eveniet
          dolorum, cum voluptates quisquam rerum inventore adipisci deleniti
          architecto debitis ipsa.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          href="/about-us/what-makes-us-different"
          className="inline-block bg-red-700 text-white text-lg font-semibold
            py-3 px-6 rounded-lg shadow-md hover:bg-red-800 transition duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
}

export default HomeTopPhoto;
