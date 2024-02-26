import React from "react";
import { ArrowRight } from "react-feather";
import Link from "next/link";

function FirstContainer() {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center w-full h-[800px] md:h-[600px] bg-gray-400"
      style={{
        backgroundImage: "url('/blur.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5 md:p-20 h-full w-full md:w-[60%] flex flex-col justify-center items-center">
        <img src="/logo2.png" className="md:hidden flex p-10" alt="" />
        <h1 className="text-center text-4xl md:text-7xl font-semibold">
          Water Proofing Service <br />
          <span className="text-blue-500">Protect</span> your property
        </h1>

        <p className="text-center pt-3 px-5 md:px-32">
          We provide professional waterproofing services to protect your
          property from water damage. Our team of experts specializes in
          identifying and fixing leaks, applying waterproof coatings, and
          installing drainage systems.
        </p>
        <Link href="//api.whatsapp.com/send?phone=8423603919&text=Hello!">
          <button className="bg-blue-500 p-2 px-4 flex felx-row rounded-full mt-6 shadow-md hover:bg-blue-800 text-white">
            Request a Service
            <ArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
      <div className="hidden md:block h-full w-[40%]"></div>
    </div>
  );
}

export default FirstContainer;
