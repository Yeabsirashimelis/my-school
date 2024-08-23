"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "../assets/images/aboutmissionandvisionphoto1.jpg";
import img2 from "../assets/images/aboutmissionandvisionphoto2.jpg";
import img3 from "../assets/images/aboutmissionandvisionphoto3.jpg";

function WeAreDifferent() {
  return (
    <div className="space-y-6 sm:space-y-16">
      {/* Background Section */}
      <div className="relative bg-gray-800 py-24 md:py-36">
        <div className="absolute inset-0">
          <Image
            src={img1}
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
            className="text-4xl md:text-5xl font-extrabold  mb-4 md:mb-6"
          >
            WHAT MAKES US DIFFERENT?
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 px-4 lg:px-8 gap-8">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl text-yellow-400 mb-4">
            <span className="border-b-2 border-red-800"> WHAT MAKES</span>
            <span className="text-red-800"> US DIFFERENT</span>
          </h2>
          <p className="text-gray-800 leading-relaxed">
            At our school, we are proud to stand out from the crowd. We believe
            that what sets us apart is our unwavering commitment to integrity,
            leadership, success, and learning – four key pillars that underpin
            everything we do. Integrity is at the heart of our school culture.
            We believe in doing the right thing, even when no one is watching.
            We foster a culture of honesty, transparency, and accountability,
            and hold ourselves to the highest ethical standards. By living our
            values and leading by example, we instill in our students a strong
            sense of integrity that will serve them well in all areas of their
            lives.
            <br />
            <br />
            Leadership is another key element of our school’s DNA. We believe
            that every student has the potential to be a leader, and we are
            committed to helping them develop the skills, knowledge, and
            confidence they need to succeed as leaders in their own right.
            Through our leadership programs, extracurricular activities, and
            community service projects, we provide our students with
            opportunities to develop their leadership skills and make a positive
            impact in the world. Success is a cornerstone of our school’s
            mission. We believe that success is not just about academic
            achievement, but also about developing the skills, knowledge, and
            character traits that will enable our students to thrive in all
            areas of their lives. Whether our students go on to university,
            start their own businesses, or pursue other paths, we are committed
            to helping them achieve their goals and realize their full
            potential.
            <br />
            <br />
            Learning is a lifelong journey, and we are passionate about creating
            a culture of continuous learning at our school. We believe that
            learning is not just about acquiring knowledge, but also about
            developing critical thinking skills, creativity, and a love of
            lifelong learning. Through our rigorous academic programs,
            experiential learning opportunities, and a commitment to innovation
            and excellence, we prepare our students for success in a rapidly
            changing world. In summary, what makes our school different is our
            unwavering commitment to integrity, leadership, success, and
            learning. We are proud to be a school that not only prepares our
            students for academic success but also helps them develop the
            skills, knowledge, and character traits they need to thrive as
            leaders and lifelong learners in a complex and rapidly changing
            world.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <Image
              src={img2}
              width={0}
              height={0}
              alt="what makes us different"
              className="w-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <Image
              src={img3}
              width={0}
              height={0}
              alt="what makes us different"
              className="w-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WeAreDifferent;
