"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/images/visionphoto1.jpg";
import img2 from "../assets/images/visionphoto2.jpg";
import img3 from "../assets/images/visionphoto3.jpg";

function AboutMissisonsAndVisions() {
  // Refs for images and text sections
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  // InView hooks for each image and text section
  const img2InView = useInView(img2Ref, { once: false, margin: "-100px 0px" });
  const img3InView = useInView(img3Ref, { once: false, margin: "-100px 0px" });
  const visionInView = useInView(visionRef, {
    once: false,
    margin: "-100px 0px",
  });
  const missionInView = useInView(missionRef, {
    once: false,
    margin: "-100px 0px",
  });

  return (
    <div className="space-y-6 sm:space-y-16">
      <div className="relative bg-gray-100 py-24 md:py-36">
        <div className="absolute inset-0">
          <Image
            src={img3}
            alt="School Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-gray-50 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-4xl font-extrabold  mb-4 md:mb-6"
          >
            MISSION AND VISION
          </motion.h1>
        </div>
      </div>

      <h2 className="font-extrabold text-2xl mb-4 px-4 md:px-8 text-yellow-600">
        <span className="border-b-2 border-red-800"> MISSION AND</span>
        <span className="text-red-800"> VISION</span>
      </h2>

      <div className="grid grid-cols-1 font-bold text-black md:grid-cols-2 gap-24 mx-auto mt-8">
        <motion.div
          ref={visionRef}
          className="mx-auto space-y-3 px-4 py-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: visionInView ? 1 : 0,
            x: visionInView ? 0 : -100,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-lg">
            <span className="border-b-4 border-red-900">OUR VISION</span>
            STATEMENT
          </h3>
          <p>
            To serve the local and international community by offering a high
            quality 21st century learning experience that promotes educational
            achievement and ethical endeavor; providing Ethiopia with its next
            generation of entrepreneurs, inventors, creators, physicists,
            chemists, engineers and scholars.
          </p>
        </motion.div>

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
            className="object-contain w-full h-auto"
            alt="Vision Image"
          />
        </motion.div>

        <motion.div
          ref={missionRef}
          className="mx-auto space-y-3 px-4 py-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: missionInView ? 1 : 0,
            x: missionInView ? 0 : 100,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-lg">
            <span className="border-b-4 border-red-900">OUR MISSION</span>
            STATEMENT
          </h3>
          <p>
            To be recognized as a premium school in Ethiopia. To be a
            learning-centered educational institution providing world-class
            education opportunities to Ethiopian and expatriate students that
            meet international standards whilst, at the same time, celebrating
            local culture, values and traditions. To provide the Ethiopia with
            well-qualified, global citizens, equipped with 21st century skills,
            ready to make a positive contribution to a modern knowledge economy.
          </p>
        </motion.div>

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
            src={img2}
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-auto"
            alt="Mission Image"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMissisonsAndVisions;
