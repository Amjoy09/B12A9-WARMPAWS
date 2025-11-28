import React from "react";
import petImg from "../assets/feed-pets-in-winter.jpg";

const WinterTips = () => {
  return (
    <div className="flex justify-around  px-20 py-25 bg-yellow-300 rounded-lg">
      <div className="px-15 ">
        <h1 className="text-[30px] font-bold mb-7 text-green-600">
          Winter Care Tips for Pets
        </h1>
        <ul class="text-xl list-disc space-y-3 font-semibold">
          <li>Keep them warm and dry</li>
          <li>Protect their paws</li>
          <li>Avoid winter toxins </li>
          <li>Maintain health and well-being </li>
          <li>Ensure visibility and identification </li>
          <li>Provide indoor exercise </li>
          <li>Keep Them Mentally & Physically Active</li>
          <li>Maintain Grooming and Skin Care</li>
        </ul>
      </div>
      <figure className=" w-180">
        <img className=" rounded-full" src={petImg} alt="" />
      </figure>
    </div>
  );
};

export default WinterTips;
