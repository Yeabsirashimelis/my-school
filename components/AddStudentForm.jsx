"use client";

import { toast } from "react-toastify";

const { useState } = require("react");

function AddStudentForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("score", score);
      formData.append("image", image);

      const res = await fetch("/api/great-students", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to added student");
      toast.success("student added succesfully");
      setImage(null);
      setPreview(false);
      setName("");
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
        ADD HIGH ACHIEVER STUDENT
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="title"
          >
            Student Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            placeholder="Enter the Student Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Describe the Student"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="score"
          >
            Student's Score
          </label>
          <input
            type="text"
            id="score"
            name="score"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            placeholder="Enter the student's score"
            required
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2"
            htmlFor="image"
          >
            Upload the Student's Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800"
            required
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Image Preview:
            </p>
            <img
              src={preview}
              alt="Image Preview"
              className="w-full h-auto max-h-64 object-cover rounded-md shadow-md"
            />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-3 text-white font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 ${
              loading
                ? "bg-red-600 cursor-not-allowed"
                : "bg-red-800 hover:bg-red-900"
            }`}
            disabled={loading}
          >
            {loading ? "Adding Student..." : "Add Student"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddStudentForm;
