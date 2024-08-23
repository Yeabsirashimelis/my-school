"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function AddGalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleImageChange(e) {
    const { files } = e.target;
    const fileArray = Array.from(files);
    setImages(fileArray);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append("images", image);
      });

      const res = await fetch("/api/add-gallery", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to add images to gallery");
      toast.success("Images added successfully");
      router.push("/gallery");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <p className="text-lg font-semibold text-gray-700 mb-4">
        ADD PHOTOS TO DESCRIBE YOUR SCHOOL
      </p>
      <label
        className="w-full max-w-md flex flex-col items-center px-4 py-6 bg-white text-red-800 rounded-lg shadow-lg tracking-wide 
      uppercase border border-blue cursor-pointer hover:bg-red-800 hover:text-white"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 4.25l-3.02-3.02A1 1 0 0 0 13.17 1H6.83a1 1 0 0 0-.71.29L3.09 4.25A1 1 0 0 0 3 4.91V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.91a1 1 0 0 0-.12-.66zM6.12 3h7.76l2.02 2.02H4.1L6.12 3zM5 8h10v9H5V8zm3 3v1H7v-1h1zm2-1h1v3H9v-3h1z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select Photos</span>
        <input
          type="file"
          className="hidden"
          multiple
          onChange={handleImageChange}
        />
      </label>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-gray-200 flex items-center justify-center"
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="py-2 px-8 text-lg mt-4 font-bold bg-red-800 text-white rounded-lg"
      >
        {loading ? "Adding Images..." : "ADD"}
      </button>
    </form>
  );
}

export default AddGalleryPage;
