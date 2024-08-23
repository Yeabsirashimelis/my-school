"use client";
import Image from "next/image";
import img1 from "../assets/images/levelsphoto1.jpg";
import img2 from "../assets/images/levelsphoto2.jpg";
import img3 from "../assets/images/levelsphoto3.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Levels() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const obliqueVariants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <div className="py-12  px-6 lg:py-24 lg:px-20">
      <h1 className="relative flex items-center justify-center text-4xl md:text-5xl font-extrabold text-center text-black mb-8">
        <span className="absolute left-[20%] w-1/6 border-b-2 border-red-700"></span>
        <span className="px-4">Levels</span>
        <span className="absolute right-[20%] w-1/6 border-b-2 border-red-700"></span>
      </h1>

      <div className="rounded-full footer-bg lg:py-24 grid px-12 py-12 grid-cols-1 lg:grid-cols-3 gap-8">
        <Link href="/academics/kindergarten">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={img1}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Level 1 Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">
                KINDERGARTEN
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </motion.div>
        </Link>

        <Link href="/academics/primary-school">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={obliqueVariants}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={img2}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt="Level 2 Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">
                PRIMARY SCHOOL
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </motion.div>
        </Link>

        <Link href="/academics/secondary-school">
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={img3}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt="Level 3 Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">
                SECONDARY SCHOOL
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Levels;
