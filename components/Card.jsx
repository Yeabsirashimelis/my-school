"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function Card({ item, type }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleReadMore(type, id) {
    if (type === "events") {
      router.push(`events/${id}`);
    } else if (type === "news") {
      router.push(`news/${id}`);
    }
  }

  async function handleDelete(id) {
    try {
      if (type === "events") {
        const res = await fetch(`/api/news-and-events/events/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Error in deleting the event");
        }
        toast.success("Event deleted successfully");
        setIsModalOpen(false); // Close the modal after successful deletion
      } else if (type === "news") {
        const res = await fetch(`/api/news-and-events/news/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Error in deleting the news");
        }
        toast.success("News deleted successfully");
        setIsModalOpen(false); // Close the modal after successful deletion
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <motion.div
        ref={ref}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          rotate: [0, 1, -1, 0], // Adding a subtle oblique effect
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }} // Scale down on tap for mobile interaction
      >
        <Image
          src={item.images[2]}
          width={600}
          height={400}
          sizes="(max-width: 600px) 100vw, 50vw"
          className="object-cover w-full h-48"
          alt={item.title}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            {item.title}
          </h2>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <motion.button
            className="inline-block bg-red-800 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleReadMore(type, item._id)}
          >
            READ MORE...
          </motion.button>
        </div>
        <div className="mt-4 px-4 py-4 flex justify-between items-center">
          <Link
            href={`${type}/${item._id}/edit`}
            className="text-yellow-500 hover:text-yellow-700"
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Link>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => setIsModalOpen(true)}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </motion.div>

      {/* Modal for confirming deletion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete this item </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-800 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
