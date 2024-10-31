"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className="space-y-6 sm:space-y-10 py-6 sm:py-10 px-4 sm:px-0 overflow-hidden"
      ref={ref}
      initial={{ opacity: 0, x: -50, y: -50 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6 sm:mb-10"
      >
        <span className="absolute left-[5%] sm:left-[9%] w-1/6 sm:w-1/5 border-b-4 border-blue-900"></span>
        <span className="px-4 sm:px-6">Welcome</span>
        <span className="absolute right-[5%] sm:right-[9%] w-1/6 sm:w-1/5 border-b-4 border-blue-900"></span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-[40%_60%] border-2 sm:border-4 rounded-lg border-blue-900 shadow-lg overflow-hidden"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="relative text-center px-10 sm:px-6 py-6 sm:py-10 bg-gray-900 text-white"
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative flex items-center justify-center px-4 sm:px-8 py-8 sm:py-16 border-[16px] sm:border-[24px] border-white bg-black bg-opacity-70">
            <div className="space-y-3 text-center">
              <p className="text-4xl sm:text-6xl text-gray-200 font-extrabold border-2 sm:border-4 border-blue-800 hover:text-blue-800 transition-colors duration-300">
                RUPHAEL
              </p>
              <p className="text-sm sm:text-lg font-semibold">
                Debre-Zeit / Bishoftu
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="px-6 sm:px-10 py-6 sm:py-10 bg-gray-100 space-y-4 overflow-hidden"
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Welcome to Ebenezer School
          </motion.h3>
          <motion.p
            className="text-sm sm:text-lg text-[#413910] leading-relaxed border-2 sm:border-4 px-4 sm:px-6 py-4 border-blue-800 rounded-lg"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 2.2, ease: "easeOut" }}
          >
            SANT RUPHAEL is committed to ensuring that all students learn and
            engage at the highest level. By providing a Highly Effective and
            Learning Progressive education, ICS not only ensures that students
            succeed in meeting high academic standards but also experience
            opportunities to apply their learning in authentic and meaningful
            ways. For more information, see the Head of School welcome{" "}
            <motion.span
              className="underline cursor-pointer hover:text-blue-900 transition-colors duration-300"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 2.4, ease: "easeOut" }}
            >
              here.
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Welcome;
