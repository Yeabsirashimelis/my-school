"use client";
import Image from "next/image";

function EachAchiever({ achiever, removeAchiever }) {
  const { _id, name, score, description, image } = achiever;

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden border-t-4 border-blue-800">
      <div className="p-6 flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-full ring-4 ring-blue-800"
        />
        <h2 className="mt-4 text-xl font-semibold text-black">{name}</h2>
        <h3 className="mt-2 text-lg text-[#0a1d30] font-bold">
          Score: {score}
        </h3>
        <p className="mt-4 text-gray-700 text-center">{description}</p>
        <button
          onClick={() => removeAchiever(_id)}
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default EachAchiever;
