"use client";
import EachAchiever from "./EachAchiever";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import CustomError from "./CustomError";
import { toast } from "react-toastify";

function HighAchievers() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [achievers, setAchievers] = useState([]);

  useEffect(() => {
    async function fetchAchievers() {
      try {
        const res = await fetch("/api/great-students");
        if (!res.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await res.json();
        setAchievers(data);
      } catch (error) {
        setErr(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAchievers();
  }, []);

  async function removeAchiever(id) {
    try {
      const res = await fetch(`api/great-students/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to remove student");
      setAchievers((prevAchievers) =>
        prevAchievers.filter((achiever) => achiever._id !== id)
      );
      console.log(achievers);
      toast.success("student removed successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  async function removeAllAchievers() {
    try {
      const res = await fetch(`api/great-students`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to remove all students");
      setAchievers(() => []);
      toast.success("students removed successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  if (loading) return <Spinner loading={loading} />;
  if (err) return <CustomError error={err} />;

  if (!achievers.length)
    return (
      <h1 className="text-center text-gray-500">
        No students have been added yet.
      </h1>
    );

  return (
    <div className="px-6 py-8 mx-auto space-y-8 max-w-screen-lg">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-[#0a1d30]">
          This Year’s{" "}
          <span className="text-blue-800">Ministry Exam Results</span>
        </h1>
        <p className="text-lg text-gray-700">
          Congratulations to our outstanding students who have excelled in their
          grade 8 Ministry exams. Their hard work and dedication have truly paid
          off.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievers.map((achiever) => (
          <EachAchiever
            achiever={achiever}
            key={achiever.id}
            removeAchiever={removeAchiever}
          />
        ))}
      </div>

      <div className="pt-12">
        <button
          onClick={removeAllAchievers}
          className=" bg-red-600 flex justify-center mx-auto text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default HighAchievers;
