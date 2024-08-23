"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import contactUsImage from "../assets/images/contactUsImage.jpg";

function ContactUsTopPhoto() {
  return (
    <div className="relative bg-gray-100 py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src={contactUsImage}
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl  leading-relaxed mb-8 md:mb-12"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          accusantium debitis dolorem maxime ab quidem laborum sint praesentium
          nostrum sunt quaerat cumque modi enim temporibus quis, consectetur
          unde vel. Eveniet.
        </motion.p>
      </div>
    </div>
  );
}

export default ContactUsTopPhoto;
