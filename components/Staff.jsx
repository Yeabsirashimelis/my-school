"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Staff() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="relative mt-12 mb-[400px] sm:mb-[300px] md:mb-[200px] lg:mb-[100px] pb-16"
    >
      <motion.h2
        initial={{ scale: 1, opacity: 0 }}
        animate={
          isInView ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-red-800 h-[300px] lg:h-[500px] flex justify-center items-center text-gray-50 text-4xl lg:text-5xl"
      >
        OUR STAFF
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute rounded-3xl top-[70%] bg-gray-50 px-12 py-8 flex justify-center mx-12 shadow-lg md:top-[60%]"
      >
        <p className="text-lg lg:text-xl leading-relaxed text-red-800">
          At <span className="font-semibold">Schoolname School</span>, our staff
          comprises talented individuals from diverse corners of the globe, each
          bringing a wealth of experience and expertise to our educational
          community. All our teachers are certified professionals, ensuring the
          highest standards of teaching and learning. In our Primary School,
          each classroom is supported by a dedicated teacher and teaching
          assistant, providing personalized attention to our young learners. In
          the Secondary School, our team includes certified IB and IGCSE
          teachers, complemented by experienced lab technicians who enhance the
          practical learning experience. Together, our passionate educators are
          committed to nurturing the next generation of global leaders and
          innovators.
        </p>
      </motion.div>
    </div>
  );
}

export default Staff;
