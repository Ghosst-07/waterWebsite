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
        <h1 ref={ref} className="text-7xl pb-5 pt-28 drop-shadow-md">
          Our Services
        </h1>
      </div>
      <div className="pt-20  flex p-10 justify-center items-center font-bold w-screen text-center gap-10">
        <div className="grid grid-cols-4 gap-20">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-yellow-300 border-b-8 border-blue-500 flex items-center flex-col quality-item px-5 w-96 h-40 rounded-xl justify-center font-sans shadow-lg relative hover:scale-110 transition-transform duration-200 ease-in-out"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full mb-2 absolute -top-10 flex justify-center items-center">
                {quality.icon}
              </div>
              <div className="pt-10 "> {quality.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Qualitycard;
