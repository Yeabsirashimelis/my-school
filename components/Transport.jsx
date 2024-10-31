"use client";
import { useRef } from "react";
import transportImage from "../assets/images/transport.jpg";
import transportImage2 from "../assets/images/transport2.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Transport() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false });
  const isParagraphInView = useInView(paragraphRef, { once: false });
  const isContentInView = useInView(contentRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <div>
      <div className="relative bg-gray-100 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={transportImage2}
            alt="School Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative container text-gray-50 mx-auto px-4 md:px-8 text-center">
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: isTitleInView ? 1 : 0,
              y: isTitleInView ? 0 : -50,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6"
          >
            Transport
          </motion.h1>
          <motion.p
            ref={paragraphRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isParagraphInView ? 1 : 0,
              y: isParagraphInView ? 0 : 50,
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl  leading-relaxed mb-8 md:mb-12"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            asperiores, libero doloremque in a at beatae harum laborum eveniet
            dolorum, cum voluptates quisquam rerum inventore adipisci deleniti
            architecto debitis ipsa.
          </motion.p>
        </div>
      </div>

      <div className="mt-12 px-6 lg:px-12 grid gap-8 grid-cols-1 md:grid-cols-2 ">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isContentInView ? 1 : 0,
            scale: isContentInView ? 1 : 0.9,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="font-extrabold text-2xl text-[#0a1d30]">
            <span className="border-b-2 border-blue-800"> TRANS</span>
            <span className=" ">PORT</span>
          </h1>
          <p className="text-sm">
            Transport at Schoolname School, we understand the importance of
            safe, reliable, and convenient school transport. We are committed to
            providing a transportation service that meets the needs of our
            students and their families, and that supports our school’s mission
            of excellence in education.
            <br />
            <br />
            We believe that transportation is an essential component of
            high-quality education, and we are dedicated to ensuring that our
            students have access to safe and reliable transportation options.
            Our school buses are well-maintained, clean, and equipped with
            modern safety features, and our drivers are highly trained and
            committed to the safety and well-being of our students. By providing
            safe, reliable, and convenient transportation options, we help
            ensure that our students have access to all of the resources and
            opportunities they need to succeed academically, socially, and
            emotionally. We are proud of our transportation service and the many
            ways in which it supports our school community.
          </p>
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isImageInView ? 1 : 0,
            x: isImageInView ? 0 : 50,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={transportImage}
            width={0}
            height={0}
            className="w-full h-full mt-8 md:mt-0"
            alt="School Transport"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Transport;
