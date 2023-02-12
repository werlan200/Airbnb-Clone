import React from "react";
import { SmallCardType } from "../typings";
import Image from "next/image";

const SmallCard = ({ img, location, distance }: SmallCardType) => {
  return (
    <div className="flex items-center m-2 mt-4.5 space-x-2.5 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-250 ease-out rounded-lg">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          alt="explore img"
          fill
          className="object-fill rounded-lg"
        />
      </div>

      <div>
        <h3>{location}</h3>
        <h4 className="text-gray-400">{distance}</h4>
      </div>
    </div>
  );
};

export default SmallCard;
