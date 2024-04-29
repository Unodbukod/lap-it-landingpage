import React from "react";
import Image from "next/image";

interface cardprops {
  description: string;
  title: string;
  iconSrc: string;
}
const Card = ({ description, title, iconSrc }: cardprops) => {
  return (

    <div className="flex items-center justify-center text-center flex-col border border-blue-500 hover:bg-blue-500 hover:text-white duration-1000 rounded-lg py-5 lg:w-[315px] lg:items-start lg:justify-start lg:pl-5">
      <div className=" bg-white rounded-full w-14 h-14 ">
        <Image 
        src={iconSrc}
         alt={title} 
         width={40}
         height={40}
         className=" translate-x-2 translate-y-1.5" 
         />
      </div>
      <div className="mx-2 mt-1 sm:mx-4 sm:mt-3 md:mx-6 md:mt-6 lg:mx-0 xl:mt-2 lg:text-start">
        <h1 className="font-semibold text-[16px] sm:text-[16px] md:text-[16px] xl:text-[18px] pb-2">{title}</h1>
        <h2 className="font-sans text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] pb-2">{description}</h2>
      </div>
    </div>
  );
};

export default Card;
