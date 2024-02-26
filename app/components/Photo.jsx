import React from "react";

function Photo() {
  return (
    <div className="w-full h-[600px] mb-10 pt-20  flex flex-col md:flex-row ">
      <div className="bg-blue-500 md:w-[50%] h-full">
        <img
          className="w-full h-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Applying_waterproofing_material_to_the_outside_of_a_tunnel.jpg/800px-Applying_waterproofing_material_to_the_outside_of_a_tunnel.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col p-10 md:w-[50%]  h-full ">
        <h1>ABOUT US</h1>
        <h1 className="text-4xl">Water Proofing Service</h1>
        <div className="flex flex-row w-[60%] mt-2 items-center">
          <div className="w-full bg-blue-500 h-[3px]" />
          <div className="h-5 w-5  border-[3px] border-blue-500 rounded-full"></div>
        </div>
        <div className=" text-1xl">
          If you're looking for a reliable and trustworthy waterproofing
          service, look no further than AB Associates. We take pride in our work
          and strive for excellence in every project we undertake. So why wait?
          Contact us today and let us help you with all your waterproofing needs
        </div>
        <div className="text-2xl pt-10 font-bold">Instagram</div>
        <a
          className="text-2xl text-blue-700"
          href="https://instagram.com/a.b_associates"
        >
          @a.b_associates
        </a>
      </div>
    </div>
  );
}

export default Photo;
