"use client";
import { useRef } from "react";
import laboratory1 from "../assets/images/laboratory1.jpg";
import laboratory2 from "../assets/images/laboratory2.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Laboratory() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const safetyTextRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false });
  const isParagraphInView = useInView(paragraphRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });
  const isSafetyTextInView = useInView(safetyTextRef, { once: false });

  return (
    <div>
      <div className="relative bg-gray-100 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={laboratory1}
            alt="School Laboratory Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
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
            className="text-4xl md:text-5xl font-extrabold  mb-4 md:mb-6"
          >
            Laboratory
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
            Our school laboratory is a state-of-the-art facility designed to
            ignite curiosity and foster a deep understanding of scientific
            principles among our students. Equipped with the latest technology
            and a wide range of scientific instruments, the laboratory provides
            a hands-on learning environment where students can engage in
            experiments and practical investigations that complement their
            theoretical studies.
          </motion.p>
        </div>
      </div>

      <div className="mt-12 px-6 lg:px-12 grid gap-8 grid-cols-1 md:grid-cols-2">
        <motion.div
          ref={safetyTextRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isSafetyTextInView ? 1 : 0,
            x: isSafetyTextInView ? 0 : -50,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="font-extrabold text-2xl text-yellow-600">
            <span className="border-b-2 border-red-800"> LABOR</span>
            <span className="text-red-800">ATORY</span>
          </h1>
          <p className="text-sm">
            Safety is a top priority in our laboratory, with strict protocols in
            place to ensure that all experiments are conducted responsibly.
            Students are taught proper laboratory procedures and the use of
            safety equipment, instilling a sense of discipline and care that is
            essential in scientific work.
          </p>
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isImageInView ? 1 : 0,
            scale: isImageInView ? 1 : 0.95,
          }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src={laboratory2}
            layout="responsive"
            width={600}
            height={400}
            alt="School Laboratory"
            className="w-full h-full mt-8 md:mt-0"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Laboratory;
