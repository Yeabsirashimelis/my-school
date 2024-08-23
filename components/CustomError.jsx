import React from "react";

const CustomError = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <h1 className="text-2xl mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg">
          {error.message || "An unexpected error occurred."}
        </p>
      </div>
    </div>
  );
};

export default CustomError;
