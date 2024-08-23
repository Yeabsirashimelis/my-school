import { motion } from "framer-motion";
import Link from "next/link";

const bookAnimation = {
  initial: { opacity: 0, scale: 0.9, rotateY: 90 },
  animate: { opacity: 1, scale: 1, rotateY: 0 },
  transition: { duration: 0.7, type: "spring", stiffness: 100, damping: 10 },
};

function NewsAndEventsNav() {
  return (
    <motion.div
      {...bookAnimation}
      className="text-left lg:bg-white z-50  rounded-lg lg:w-[400px] origin-top"
      style={{ perspective: "1000px" }}
    >
      <Link href="/news-and-events/news">
        <motion.p
          whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
          transition={{ duration: 0.3 }}
          className="block py-2 px-6 text-red-800 hover:text-red-600 rounded-md transition-colors duration-300"
        >
          - News
        </motion.p>
      </Link>
      <Link href="/news-and-events/events">
        <motion.p
          whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
          transition={{ duration: 0.3 }}
          className="block py-2 px-6 text-red-800 hover:text-red-600 rounded-md transition-colors duration-300"
        >
          - Events
        </motion.p>
      </Link>
    </motion.div>
  );
}

export default NewsAndEventsNav;
