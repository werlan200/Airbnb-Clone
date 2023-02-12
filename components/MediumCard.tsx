import Image from "next/image";
import React from "react";
import { MediumCardType } from "../typings";
const MediumCard = ({ img, title }: MediumCardType) => {
  return (
    <div className="hover:scale-105 transition duration-150 ease-out rounded-full">
      <div className="relative w-80 h-80">
        <Image
          src={img}
          fill
          alt="medium cart img"
          className="object-fill rounded-lg"
        />
      </div>

      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
  );
};

export default MediumCard;
