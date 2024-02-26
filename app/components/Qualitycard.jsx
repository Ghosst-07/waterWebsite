import React, { forwardRef } from "react";
import { ArrowLeft } from "react-feather";

const Qualitycard = forwardRef((props, ref) => {
  const qualities = [
    { title: "Roof Waterproofing", icon: <ArrowLeft color="white" /> },
    { title: "Bathroom Waterprofing", icon: <ArrowLeft color="white" /> },
    {
      title: "Balcony Waterproofing",
      icon: <ArrowLeft color="white" />,
    },
    { title: "Planters Waterproofing", icon: <ArrowLeft color="white" /> },
    {
      title: "G I / ASBESTER-Sheet Waterproofing",
      icon: <ArrowLeft color="white" />,
    },
    { title: "Interwalls Waterprofing", icon: <ArrowLeft color="white" /> },
    { title: "External Waterproofing", icon: <ArrowLeft color="white" /> },
    {
      title: "Basement Walls & Raft Waterproofing",
      icon: <ArrowLeft color="white" />,
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <h1
          ref={ref}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-5 pt-12 md:pt-16 lg:pt-20 drop-shadow-md"
        >
          Our Services
        </h1>
      </div>
      <div className="pt-8 md:pt-16 lg:pt-20 flex p-5 md:p-10 justify-center items-center font-bold w-full text-center gap-5 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-yellow-300 border-b-4 md:border-b-8 border-blue-500 flex items-center flex-col quality-item p-3 md:p-5 lg:p-8 xl:p-10 rounded-xl justify-center font-sans shadow-lg relative hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-blue-500 rounded-full mb-2 absolute -top-5 md:-top-10 flex justify-center items-center">
                {quality.icon}
              </div>
              <div className="pt-3 md:pt-5 lg:pt-8 xl:pt-10 text-sm md:text-base lg:text-lg xl:text-xl">
                {quality.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Qualitycard;
