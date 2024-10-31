"use client";
import { useRef } from "react";
import library1 from "../assets/images/library.jpg";
import library2 from "../assets/images/library2.jpg";
import library3 from "../assets/images/library3.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Library() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const isTitleInView = useInView(titleRef, {
    triggerOnce: false,
    threshold: 0.1,
  });
  const isParagraphInView = useInView(paragraphRef, {
    triggerOnce: false,
    threshold: 0.1,
  });
  const isImage1InView = useInView(image1Ref, {
    triggerOnce: false,
    threshold: 0.1,
  });
  const isImage2InView = useInView(image2Ref, {
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div>
      <div className="relative bg-gray-100 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={library3}
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
            Library
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
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-extrabold text-2xl text-[#0a1d30]"
          >
            <span className="border-b-2 border-blue-800 "> LIB</span>
            <span className="">RARY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-sm"
          >
            Our school library is much more than just a repository of books; it
            is the intellectual heart of our academic community, a space where
            curiosity thrives, and the pursuit of knowledge is celebrated. The
            library is thoughtfully designed to cater to the diverse needs of
            our students, offering a vast and meticulously curated collection of
            books that span across various genres, subjects, and levels of
            difficulty. Whether a student is just beginning to explore the joy
            of reading or is delving into complex topics for advanced studies,
            our library provides a wealth of resources that inspire and
            challenge every learner.
            <br />
            The atmosphere in the library is one of quiet contemplation and
            focused study, making it an ideal environment for students who wish
            to concentrate on their academic work. Yet, it is also a place of
            collaboration and shared discovery, where students can work together
            on group projects, engage in discussions, and learn from one
            another. The library's layout includes comfortable reading nooks,
            spacious study tables, and group workstations, ensuring that there
            is a perfect spot for every student's preferred style of learning.
            <br />
            The library staff plays an integral role in the success of our
            students. Highly knowledgeable and approachable, our librarians are
            always on hand to assist with research, recommend books, and guide
            students in developing effective study habits. They offer
            personalized support to help students navigate the vast array of
            resources available, whether for a class assignment, a research
            project, or personal enrichment. Through workshops, reading
            programs, and one-on-one consultations, our librarians foster a
            culture of lifelong learning and intellectual curiosity. Moreover,
            the library serves as a center for cultural and academic events,
            hosting author visits, book clubs, lectures, and exhibitions that
            enrich the educational experience. These events provide students
            with opportunities to engage with ideas beyond the classroom, to
            think critically, and to connect with the broader world of
            literature and scholarship. The library's role as a venue for these
            activities underscores its importance as a space where the school
            community comes together to celebrate the joys of learning.
          </motion.p>
        </div>
        <div className="space-y-4">
          <motion.div
            ref={image1Ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isImage1InView ? 1 : 0,
              x: isImage1InView ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={library1}
              width={0}
              height={0}
              alt="School library"
              className="w-full"
            />
          </motion.div>
          <motion.div
            ref={image2Ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isImage2InView ? 1 : 0,
              x: isImage2InView ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={library2}
              width={0}
              height={0}
              alt="School library"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Library;
