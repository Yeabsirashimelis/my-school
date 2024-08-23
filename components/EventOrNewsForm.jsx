"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function EventOrNewsForm({ type }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [author, setAuthor] = useState("");
  const imageFiles = [];
  const router = useRouter(); // Initialize useRouter hook

  function handleImageChange(e) {
    const { files } = e.target;
    for (const file of files) {
      imageFiles.push(file);
    }
    setImages(imageFiles);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
      formData.append("author", author);
      images.forEach((image) => {
        formData.append("images", image);
      });
      let res;
      if (type === "Events") {
        res = await fetch("/api/news-and-events/events", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Failed to add an event");
        const newEvent = await res.json(); // Get the new event data
        router.push(`/news-and-events/events/${newEvent._id}`); // Redirect to the event detail page
      } else if (type === "News") {
        res = await fetch("/api/news-and-events/news", {
          method: "POST",
          body: formData,
        });
        const newNews = await res.json(); // Get the new news data
        router.push(`/news-and-events/news/${newNews._id}`); // Redirect to the news detail page
      }
      toast.success(`${type} successfully added`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="mt-8 max-w-2xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-center text-red-800 text-4xl font-bold mb-6">
        ADD {type.toUpperCase()}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            placeholder={`Enter the ${type} title`}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            rows="3"
            placeholder="Enter a brief description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            rows="6"
            placeholder="Enter the full content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="images"
          >
            Upload Images Related To The {type}
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            multiple
            required
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            placeholder="Enter the author's name"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-3 text-white font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 ${
              loading
                ? "bg-red-600 cursor-not-allowed"
                : "bg-red-800 hover:bg-red-900"
            }`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventOrNewsForm;
