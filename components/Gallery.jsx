"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import img1 from "../assets/images/galleryphoto1.jpg";
import img2 from "../assets/images/galleryphoto2.jpg";
import img3 from "../assets/images/galleryphoto3.jpg";
import img4 from "../assets/images/galleryphoto4.jpg";
import Link from "next/link";

function Gallery() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const inView1 = useInView(ref1, { triggerOnce: false });
  const inView2 = useInView(ref2, { triggerOnce: false });
  const inView3 = useInView(ref3, { triggerOnce: false });
  const inView4 = useInView(ref4, { triggerOnce: false });

  return (
    <div className="flex flex-col gallery-bg gap-4">
      <div className="mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <motion.div
          ref={ref1}
          initial={{ y: -100 }}
          animate={inView1 ? { y: 0 } : { y: -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img1}
            height={0}
            width={0}
            sizes="100vw"
            className="object-contain rounded-full w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ x: 100 }}
          animate={inView2 ? { x: 0 } : { x: 100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img2}
            height={0}
            width={0}
            sizes="100vw"
            className="object-contain rounded-full w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ y: 100 }}
          animate={inView3 ? { y: 0 } : { y: 100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img3}
            height={0}
            width={0}
            sizes="100vw"
            className="object-contain rounded-full w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ x: -100 }}
          animate={inView4 ? { x: 0 } : { x: -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img4}
            height={0}
            width={0}
            sizes="100vw"
            className="object-contain rounded-full w-full h-full"
          />
        </motion.div>
      </div>

      <div className="flex bg-gray-200 px-4 sm:px-12 md:px-16 lg:px-24 py-8 flex-col mx-auto justify-center">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          autem alias sapiente labore similique beatae cupiditate? Illo
          inventore, tempora quasi, soluta sint nostrum eaque hic itaque laborum
          magni dicta possimus.
        </p>
        <Link href="/gallery">
          <button
            className="mt-6 border-2 border-[#0a1d30] w-full px-4 md:w-[30%] flex justify-center mx-auto py-2 
             text-lg text-[#0a1d30] bg-white hover:bg-[#0a1d30] hover:text-white 
             rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            SEE OUR GALLERY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
