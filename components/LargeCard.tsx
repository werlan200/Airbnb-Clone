import Image from "next/image";
import React from "react";
import { LargeCardType } from "../typings";

const LargeCard = ({ img, description, title, btnText }: LargeCardType) => {
  return (
    <>
      <div className="relative h-96 min-w-[290px]">
        <Image
          src={img}
          alt="large card"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="absolute top-24 left-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-1.5 font-semibold">{description}</p>
        <button className="bg-black text-white px-2.5 py-1.5 rounded-lg cursor-pointer my-3">
          {btnText}
        </button>
      </div>
    </>
  );
};

export default LargeCard;
