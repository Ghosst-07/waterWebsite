import React from "react";
import { ArrowRight } from "react-feather";
import Link from "next/link";
function FirstContainer() {
  return (
    <div
      className="flex flex-row justify-center items-center w-full h-[600px] bg-gray-400"
      style={{
        backgroundImage: "url('/blur.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-20  h-full w-[60%] flex flex-col justify-center items-center">
        <h1 className="text-center text-7xl font-semibold">
          Water Proofing Service <br />
          <span className="text-blue-500">Protect</span> your property
        </h1>

        <p className="text-center pt-3  px-32">
          We provide professional waterproofing services to protect your
          property from water damage. Our team of experts specializes in
          identifying and fixing leaks, applying waterproof coatings, and
          installing drainage systems.
        </p>
        <Link href="//api.whatsapp.com/send?phone=91MOBILE_NUMBER&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND">
          <button className="bg-blue-500 p-2 px-4 flex felx-row rounded-full mt-6 shadow-md hover:bg-blue-800 text-white">
            Request a Service
            <ArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
      <div className="b h-full w-[40%] "></div>
    </div>
  );
}

export default FirstContainer;
