"use client";

import { motion } from "framer-motion";
import historyImage from "/assets/images/historyImage.jpg";
import Image from "next/image";

function History() {
  return (
    <div className="mt-12 lg-h[70%] lg:grid lg:grid-cols-2 lg:gap-8 lg:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:h-[70%] items-center px-4 py-7 bg-gray-50"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl lg:text-3xl px-4 py-2 bg-red-800 text-gray-50 mb-4"
        >
          Welcome to Schoolname school
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-red-800 px-4 py-2 text-lg"
        >
          schoolname school is a private school, which was established in
          September 1993. It is one of the most prominent schools in Ethiopia,
          providing quality education at Nursery, Primary, Secondary and
          Pre-college levels. The School is known for providing high quality
          education including strong English background, accelerated curriculum,
          small class size, and individual attention as well as a healthy and
          nurturing environment. Students are educated well so that they will be
          wholesome citizens of the world. School of Tomorrow is an ever
          expanding educational establishment highly sought for by both parents
          and students. It stands as one of the most popular schools with its
          well-trained teaching staff and overall conducive teaching-learning
          atmosphere. The School is located in ten different parts of Addis
          Ababa City, the capital of Ethiopia. It has three branches in Bole
          sub-city (Hayahulet, Rwanda & Bole Eyerusalem) three branches in Yeka
          Sub city ( Misrak, CMC & Lem ), One branch in Arada Sub city (Ras
          Desta), three branches in Nifassilk Lafto Sub City (Bisrat, Gofa and
          Mekanisa). This makes the school easily accessible to students/
          parents from different parts of the city.{" "}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-96 lg:h-[70%]"
      >
        <Image
          src={historyImage}
          alt="history Photo"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </motion.div>
    </div>
  );
}

export default History;
