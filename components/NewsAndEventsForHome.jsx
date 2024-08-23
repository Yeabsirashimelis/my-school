"use client";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import img1 from "../assets/images/homenewsandevents1.jpg";
import img2 from "../assets/images/homenewsandevents2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function NewsAndEventsForHome() {
  const [newsButtonInview, setNewsButtonInview] = useState(false);
  const [eventsButtonInview, setEventsButtonInview] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      className="mt-16 pt-8 flex flex-col items-center justify-center border-t border-t-gray-200"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center text-4xl md:text-5xl font-extrabold text-center text-black mb-8"
        >
          <span className="absolute left-[8%] w-1/6 border-b-2 border-red-700"></span>
          <span className="px-4">News & Events</span>
          <span className="absolute right-[8%] w-1/6 border-b-2 border-red-700"></span>
        </motion.h1>
        <p className="font-extralight text-sm sm:text-base mt-2">
          Stay informed with the latest updates and happenings at our school.
          From academic achievements to extracurricular activities, discover all
          that’s happening within our vibrant school community.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[95%] mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center bg-gray-100 px-4 py-4 relative overflow-hidden"
          onMouseEnter={() => setNewsButtonInview(true)}
          onMouseLeave={() => setNewsButtonInview(false)}
        >
          <AnimatePresence>
            {!newsButtonInview ? (
              <motion.div
                key="text"
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-extrabold text-lg lg:text-xl text-red-800">
                  <em>SEE ALL NEWS</em>
                </h2>
                <p className="font-light text-sm mt-2">
                  Stay updated with the latest developments at our school,
                  including academic achievements, important announcements, and
                  community highlights. Our news section ensures you're always
                  in the loop about what's happening within our school.
                </p>
              </motion.div>
            ) : (
              <Link href="/news-and-events/news">
                <motion.div
                  key="link"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  exit={{ width: "0%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 gallery-bg flex items-center justify-center"
                >
                  <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center">
                    SEE NEWS
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </p>
                </motion.div>
              </Link>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setHoveredImage("news")}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src={img1}
            layout="responsive"
            width={600}
            height={400}
            sizes="100vw"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            alt="News Image 1"
          />
          {hoveredImage === "news" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 text-center"
            >
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold">
                Latest news updates and announcements from our school.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setHoveredImage("events")}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src={img2}
            layout="responsive"
            width={600}
            height={400}
            sizes="100vw"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            alt="Events Image 2"
          />
          {hoveredImage === "events" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 text-center"
            >
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold">
                Exciting upcoming events and activities in our school calendar.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center bg-gray-100 px-4 py-4 relative overflow-hidden"
          onMouseEnter={() => setEventsButtonInview(true)}
          onMouseLeave={() => setEventsButtonInview(false)}
        >
          <AnimatePresence>
            {!eventsButtonInview ? (
              <motion.div
                key="text"
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-extrabold text-lg lg:text-xl text-red-800">
                  <em>SEE ALL EVENTS</em>
                </h2>
                <p className="font-light text-sm mt-2">
                  Join us for exciting events throughout the year, from school
                  celebrations to educational workshops and extracurricular
                  activities. Our events calendar offers opportunities for
                  students, parents, and staff to come together and engage in
                  our vibrant school community.
                </p>
              </motion.div>
            ) : (
              <Link href="/news-and-events/events">
                <motion.div
                  key="link"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  exit={{ width: "0%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 gallery-bg flex items-center justify-center"
                >
                  <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center">
                    SEE EVENTS
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </p>
                </motion.div>
              </Link>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default NewsAndEventsForHome;
