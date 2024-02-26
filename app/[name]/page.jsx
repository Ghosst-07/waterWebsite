"use client";
import React from "react";
import Navbar from "../components/Navbar";

function Type() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <img
        src="/path/to/your/image.jpg"
        alt="Waterproofing Type"
        className="w-64 h-64 rounded-full mb-4 animate-pulse"
      />
      <h1 className="text-2xl font-bold mb-2">Waterproofing Type</h1>
      <p className="text-lg text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo ac ultricies tincidunt, nunc nisl consectetur lectus,
        ac tincidunt nisl nunc id nunc.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
}

export default Type;
