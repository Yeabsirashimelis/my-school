"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import owner from "../assets/images/owner.jpg";
import director from "../assets/images/director.jpg";
import vicedirector from "../assets/images/vicedirector.jpg";

function Administers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center text-red-800 mb-12">
        Our Leadership Team
      </h2>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {[
          {
            image: owner,
            name: "Mr. John Doe",
            position: "Owner of Schoolname School",
            alt: "Mr. John Doe",
          },
          {
            image: director,
            name: "Mr. Kilman Francis",
            position: "Director of Schoolname School",
            alt: "Mr. Kilman Francis",
          },
          {
            image: vicedirector,
            name: "Mr. Joe Gomez",
            position: "Vice-Director of Schoolname School",
            alt: "Mr. Joe Gomez",
          },
        ].map((admin, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className="text-center w-full flex flex-col items-center"
          >
            <div className="relative  rounded-full w-[600px] h-[600px] lg:w-48 lg:h-48 mx-auto mb-6">
              <Image
                src={admin.image}
                alt={admin.alt}
                layout="fill"
                objectFit="cover"
                className=" rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-red-700 mb-2">
              {admin.name}
            </h3>
            <p className="text-gray-600">{admin.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Administers;
