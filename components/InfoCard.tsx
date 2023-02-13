import Image from "next/image";
import React from "react";
import { SearchResult } from "../typings";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({
  img,
  location,
  title,
  price,
  description,
  lat,
  long,
  total,
  star,
}: SearchResult) => {
  return (
    <div className="flex space-x-3 p-5 border-b first:border-t cursor-pointer rounded-xl hover:shadow-lg hover:opacity-90 transition duration-200 ease-out">
      <div className="relative w-40 md:h-48 md:w-80 flex-shrink-0 flex-stretch">
        <Image
          src={img}
          fill
          alt="stay img"
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="hidden md:flex justify-between">
          <p className="text-sm text-gray-400">{location}</p>
          <HeartIcon className="h-6" />
        </div>

        <h4 className="text-xl font-semibold">{title}</h4>

        <div className="hidden md:flex border-b w-10 pt-2"></div>

        <p className="hidden md:flex text-gray-500 pt-2 flex-grow text-sm">
          {description}
        </p>

        <div className="flex justify-between">
          <div className="flex items-center self-end">
            <StarIcon className="text-red-400 h-6" />
            <span className="font-semibold">{star}</span>
          </div>
          <div className="text-end">
            <h2 className="text-lg md:text-2xl font-bold">{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
