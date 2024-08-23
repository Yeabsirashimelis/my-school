"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/images/ourvaluesimage1.jpg";
import img2 from "../assets/images/ourvaluesimage2.jpg";
import img3 from "../assets/images/ourvaluesimage3.jpg";
import img4 from "../assets/images/ourvaluesimage4.jpg";

function OurValues() {
  // Refs for each image
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  // Refs for text sections
  const studentsRef = useRef(null);
  const parentsRef = useRef(null);
  const teachersRef = useRef(null);

  // InView hooks for each image and text section
  const img2InView = useInView(img2Ref, { once: false, margin: "-100px 0px" });
  const img3InView = useInView(img3Ref, { once: false, margin: "-100px 0px" });
  const img4InView = useInView(img4Ref, { once: false, margin: "-100px 0px" });
  const studentsInView = useInView(studentsRef, {
    once: false,
    margin: "-100px 0px",
  });
  const parentsInView = useInView(parentsRef, {
    once: false,
    margin: "-100px 0px",
  });
  const teachersInView = useInView(teachersRef, {
    once: false,
    margin: "-100px 0px",
  });

  return (
    <div className="space-y-6 sm:space-y-16">
      {/* Background Section */}
      <div className="relative bg-gray-200 py-24 md:py-36">
        <div className="absolute inset-0">
          <Image
            src={img2}
            alt="School Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative container text-gray-50 mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6"
          >
            OUR VALUES
          </motion.h1>
        </div>
      </div>

      <h2 className="font-extrabold text-2xl mb-4 px-4 md:px-8 text-yellow-600">
        <span className="border-b-2 border-red-800"> OUR</span>
        <span className="text-red-800"> VALUES</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto px-4 md:px-8">
        {/* Students Section */}
        <motion.div
          ref={studentsRef}
          className="space-y-3 px-4 py-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: studentsInView ? 1 : 0,
            x: studentsInView ? 0 : -100,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold text-red-800">
            <span className="border-b-4 border-red-800">OUR STUD</span>
            ENTS ARE
          </h3>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Learners</li>
            <li>Ethical</li>
            <li>Reflective</li>
            <li>Resilient</li>
            <li>Confident</li>
            <li>Collaborative</li>
            <li>Challenged</li>
          </ul>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          ref={img2Ref}
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -150, rotate: -10 }}
          animate={{
            opacity: img2InView ? 1 : 0,
            x: img2InView ? 0 : -150,
            rotate: img2InView ? 0 : -10,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={img2}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          ref={img3Ref}
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 150, scale: 0.8 }}
          animate={{
            opacity: img3InView ? 1 : 0,
            y: img3InView ? 0 : 150,
            scale: img3InView ? 1 : 0.8,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={img3}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Parents Section */}
        <motion.div
          ref={parentsRef}
          className="space-y-3 px-4 py-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: parentsInView ? 1 : 0,
            x: parentsInView ? 0 : 100,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold text-red-800">
            <span className="border-b-4 border-red-800">OUR PARE</span>NTS ARE
          </h3>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Valued</li>
            <li>Well-informed</li>
            <li>Proud</li>
            <li>Happy</li>
            <li>Welcomed</li>
            <li>Partners</li>
          </ul>
        </motion.div>

        {/* Teachers Section */}
        <motion.div
          ref={teachersRef}
          className="space-y-3 px-4 py-4"
          initial={{ opacity: 0, x: -100, rotate: 10 }}
          animate={{
            opacity: teachersInView ? 1 : 0,
            x: teachersInView ? 0 : -100,
            rotate: teachersInView ? 0 : 10,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold text-red-800">
            <span className="border-b-4 border-red-800">OUR TEAC</span>HERS ARE
          </h3>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Values Driven</li>
            <li>Honest</li>
            <li>Dynamic</li>
            <li>Innovative</li>
            <li>Progressive</li>
            <li>Caring</li>
            <li>Ambitious</li>
          </ul>
        </motion.div>

        {/* Image 4 */}
        <motion.div
          ref={img4Ref}
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{
            opacity: img4InView ? 1 : 0,
            scale: img4InView ? 1 : 0.9,
            rotate: img4InView ? 0 : 10,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={img4}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default OurValues;
